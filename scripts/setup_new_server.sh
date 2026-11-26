#!/bin/bash
set -euo pipefail

###############################################################################
# Setup Script สำหรับ Server ใหม่ (Cross-Engine + Cloudflare Tunnels)
# ใช้หลังจากคัดไฟล์ credential (.json) จากเครื่องเก่ามาแล้ว
###############################################################################

echo "================================================================"
echo "  SETUP SERVER ใหม่ - Cross-Engine + Cloudflare Tunnels"
echo "================================================================"

# ---------- อ่านข้อมูลจากผู้ใช้ ----------
read -p "กรอก user ที่ใช้งานบน server ใหม่ (default potato): " APP_USER
APP_USER=${APP_USER:-potato}

read -p "กรอก IP ของ server ใหม่: " SERVER_IP

read -p "กรอก path ของ cloudflared credentials (default /home/$APP_USER/.cloudflared): " CF_DIR
CF_DIR=${CF_DIR:-/home/$APP_USER/.cloudflared}

read -p "กรอก path ของ cloudflared binary (default /usr/local/bin/cloudflared): " CF_BIN
CF_BIN=${CF_BIN:-/usr/local/bin/cloudflared}

read -p "ติดตั้ง Node.js + npm ให้อัตโนมัติไหม? (y/n, default y): " INSTALL_NODE
INSTALL_NODE=${INSTALL_NODE:-y}

CONFIG_DIR="/etc/cloudflared"
SVC_DIR="/etc/systemd/system"

# ---------- Phase 1: ตรวจสอบเบื้องต้น ----------
echo ""
echo ">>> Phase 1: ตรวจสอบสภาพแวดล้อม"

if ! command -v git &>/dev/null; then
    echo "ติดตั้ง git..."
    sudo apt-get update -y && sudo apt-get install -y git curl wget ca-certificates gnupg
fi

if [ "$INSTALL_NODE" = "y" ] && ! command -v node &>/dev/null; then
    echo "ติดตั้ง Node.js LTS..."
    curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

echo "Node version: $(node --version 2>/dev/null || echo 'ยังไม่ติดตั้ง')"
echo "NPM version: $(npm --version 2>/dev/null || echo 'ยังไม่ติดตั้ง')"
echo "Git version: $(git --version 2>/dev/null || echo 'ยังไม่ติดตั้ง')"

# ---------- Phase 2: Clone repos ----------
echo ""
echo ">>> Phase 2: Clone repos จาก GitHub"

WORK_DIR="/home/$APP_USER"
mkdir -p "$WORK_DIR"

if [ ! -d "$WORK_DIR/cross-engine-web" ]; then
    echo "Clone cross-engine-web..."
    git clone https://github.com/riograndia/cross-engine-web.git "$WORK_DIR/cross-engine-web"
else
    echo "cross-engine-web มีอยู่แล้ว ข้ามการ clone"
fi

cd "$WORK_DIR/cross-engine-web"

if [ ! -d node_modules ]; then
    echo "รัน npm install..."
    npm install
else
    echo "node_modules มีอยู่แล้ว ข้ามการ install"
fi

# ---------- Phase 3: สร้าง systemd service สำหรับ Next.js ----------
echo ""
echo ">>> Phase 3: ตั้งค่า systemd service สำหรับ cross-engine-web"

cat > "$SVC_DIR/cross-engine-web.service" <<EOF
[Unit]
Description=Cross-Engine Web (Next.js Dev Server)
Wants=network-online.target
After=network-online.target

[Service]
Type=simple
User=${APP_USER}
WorkingDirectory=/home/${APP_USER}/cross-engine-web
ExecStart=/usr/bin/npm run dev
Restart=always
RestartSec=5
Environment=NODE_ENV=development
Environment=PORT=3333

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable --now cross-engine-web.service

echo "รอให้ Next.js เริ่มทำงาน (10 วินาที)..."
sleep 10

# ตรวจสอบ port 3333
if ss -tlnp | grep -q ":3333"; then
    echo "✅ Port 3333 เปิดใช้งานแล้ว"
else
    echo "⚠️  Port 3333 ยังไม่เปิด ลองตรวจสอบ log: journalctl -u cross-engine-web.service -f"
fi

# ---------- Phase 4: ตั้งค่า Cloudflare Tunnel services ----------
echo ""
echo ">>> Phase 4: ตั้งค่า Cloudflare Tunnel services (แยกจากตัวเดิม)"

# ตรวจ credential files
for uuid in 2f812c1a-f34c-47cc-9e11-ba22edab19db 3155a137-fe8a-48fc-a9fd-cf5852a142aa; do
    if [ ! -f "$CF_DIR/${uuid}.json" ]; then
        echo ""
        echo "❌ ERROR: ไม่พบ credential file: $CF_DIR/${uuid}.json"
        echo "กรุณาคัดไฟล์ credential จากเครื่องเก่ามาที่ $CF_DIR/ ก่อนรัน script นี้อีกครั้ง"
        echo "ตัวอย่าง: scp -P 14321 /home/user01/.cloudflared/${uuid}.json ${APP_USER}@<ip-server-ใหม่>:/home/${APP_USER}/.cloudflared/"
        exit 1
    fi
done

# สร้าง config crossengine (ไม่ทับ config เดิมของ server)
cat > "${CONFIG_DIR}/crossengine-config.yml" <<EOF
tunnel: 2f812c1a-f34c-47cc-9e11-ba22edab19db
credentials-file: ${CF_DIR}/2f812c1a-f34c-47cc-9e11-ba22edab19db.json

ingress:
  - hostname: crossengine.riograndia.xyz
    service: http://${SERVER_IP}:3333
  - service: http_status:404
EOF

# สร้าง config gpuobs
cat > "${CONFIG_DIR}/gpuobs-config.yml" <<EOF
tunnel: 3155a137-fe8a-48fc-a9fd-cf5852a142aa
credentials-file: ${CF_DIR}/3155a137-fe8a-48fc-a9fd-cf5852a142aa.json

ingress:
  - hostname: riograndia.xyz
    service: http://localhost:3000
  - hostname: www.riograndia.xyz
    service: http://localhost:3000
  - hostname: gpuobs.riograndia.xyz
    service: http://${SERVER_IP}:9998
  - hostname: grafana.riograndia.xyz
    service: http://${SERVER_IP}:3000
  - service: http_status:404
EOF

chown root:root "${CONFIG_DIR}/crossengine-config.yml" "${CONFIG_DIR}/gpuobs-config.yml"
chmod 644 "${CONFIG_DIR}/crossengine-config.yml" "${CONFIG_DIR}/gpuobs-config.yml"

# สร้าง systemd services แยกต่างหาก
cat > "$SVC_DIR/cloudflared-crossengine.service" <<EOF
[Unit]
Description=Cloudflare Tunnel Crossengine (separate)
Wants=network-online.target
After=network-online.target

[Service]
Type=simple
User=${APP_USER}
ExecStart=${CF_BIN} --no-autoupdate tunnel --config ${CONFIG_DIR}/crossengine-config.yml run crossengine-web
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF

cat > "$SVC_DIR/cloudflared-gpuobs.service" <<EOF
[Unit]
Description=Cloudflare Tunnel GPU Obs (separate)
Wants=network-online.target
After=network-online.target

[Service]
Type=simple
User=${APP_USER}
ExecStart=${CF_BIN} --no-autoupdate tunnel --config ${CONFIG_DIR}/gpuobs-config.yml run gpuobs
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable --now cloudflared-crossengine.service cloudflared-gpuobs.service

echo "รอให้ cloudflared เริ่มเชื่อมต่อ tunnel (10 วินาที)..."
sleep 10

# ---------- Phase 5: Health Check ----------
echo ""
echo ">>> Phase 5: ตรวจสอบสุขภาพบริการทั้งหมด"

echo ""
echo "--- Systemd Services ---"
systemctl is-active cross-engine-web.service 2>&1 || echo "cross-engine-web: ไม่รัน"
systemctl is-active cloudflared-crossengine.service 2>&1 || echo "cloudflared-crossengine: ไม่รัน"
systemctl is-active cloudflared-gpuobs.service 2>&1 || echo "cloudflared-gpuobs: ไม่รัน"
systemctl is-active cloudflared.service 2>&1 || echo "cloudflared (เดิม): ไม่รัน (ปกติถ้าไม่ได้ติดตั้ง)"

echo ""
echo "--- Ports ที่เปิดอยู่ ---"
ss -tlnp | grep -E ":3333|:3000|:9998|:8428|:5433|:8099" || echo "ไม่พบพอร์ตที่ติดตาม"

echo ""
echo "--- HTTP Health Check ---"
curl -s -o /dev/null -w "crossengine.riograndia.xyz: HTTP %{http_code} | %{time_total}s\n" https://crossengine.riograndia.xyz 2>/dev/null || echo "crossengine.riograndia.xyz: ไม่ตอบสนอง (อาจต้องรอ tunnel เชื่อมต่อสักครู่)"
curl -s -o /dev/null -w "localhost:3333: HTTP %{http_code} | %{time_total}s\n" http://localhost:3333 2>/dev/null || echo "localhost:3333: ไม่ตอบสนอง"

echo ""
echo "================================================================"
echo "  SETUP เสร็จสมบูรณ์"
echo "================================================================"
echo ""
echo "คำสั่งที่ใช้ตรวจสอบสถานะ:"
echo "  systemctl status cross-engine-web.service"
echo "  systemctl status cloudflared-crossengine.service"
echo "  systemctl status cloudflared-gpuobs.service"
echo "  journalctl -u cross-engine-web.service -f"
echo "  journalctl -u cloudflared-crossengine.service -f"
echo ""
echo "หมายเหตุ: ถ้า cloudflared tunnel ยังไม่ขึ้น ให้รออีก 1-2 นาทีแล้วตรวจสอบอีกครั้ง"
