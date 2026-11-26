# Docker build & run คำสั่งตัวอย่าง
# =============================================

# สร้าง image (รันครั้งแรกหรือเมื่อแก้ไขโค้ด)
docker build -t cross-engine-web:latest .

# รันด้วย docker run (ทดสอบเร็วๆ)
docker run -d --name cross-engine-web \
  -p 3333:3333 \
  -e NODE_ENV=production \
  -e PORT=3333 \
  cross-engine-web:latest

# หรือใช้ docker-compose (แนะนำ)
docker compose up -d --build

# ดู log
docker compose logs -f cross-engine-web

# ตรวจสอบสุขภาพ
curl -I http://localhost:3333/

# ปิดบริการ
docker compose down

# =============================================
# การเชื่อมต่อกับ Cloudflare Tunnel (ตัวอย่าง)
# เพิ่มใน docker-compose.yml หรือรันแยกต่างหาก:
#
# cloudflared-tunnel:
#   image: cloudflare/cloudflared:latest
#   container_name: cloudflared-crossengine
#   restart: unless-stopped
#   command: tunnel --config /etc/cloudflared/config.yml run crossengine-web
#   volumes:
#     - ./cloudflared:/etc/cloudflared
#   environment:
#     - TUNNEL_TOKEN=your_tunnel_token
#   depends_on:
#     - cross-engine-web
#   networks:
#     - cross-engine-net
