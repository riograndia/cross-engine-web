# Cross Engine GPU Cloud — Web Platform

**Enterprise GPU Cloud Platform** — High-performance GPU infrastructure for AI inference, LLM, visual workloads, and enterprise applications.

---

## 🚀 Quick Start

### Development

```bash
# Navigate to project
cd cross-engine-web

# Install dependencies (already done)
npm install

# Start development server on port 3333
npm run dev
```

**Open:** [http://localhost:3333](http://localhost:3333)

---

## 📁 Project Structure

```
cross-engine-web/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout (Header + Footer)
│   │   ├── page.tsx                # Homepage
│   │   └── globals.css             # Global styles + design tokens
│   │
│   ├── components/
│   │   ├── ui/                     # Primitive components (shadcn/ui)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   └── ...
│   │   ├── layout/                 # Layout components
│   │   │   ├── site-header.tsx
│   │   │   ├── site-footer.tsx
│   │   │   └── container.tsx
│   │   ├── sections/               # Section components
│   │   ├── product/                # Product components
│   │   └── charts/                 # ECharts components
│   │
│   ├── lib/
│   │   ├── tokens.ts               # Design tokens (colors, spacing, etc.)
│   │   └── utils.ts                # Utility functions
│   │
│   ├── hooks/                      # Custom hooks
│   └── types/                      # TypeScript types
│
├── public/
│   └── images/
│       ├── logos/                  # Cross Engine, Nutanix logos
│       ├── gpus/                   # NVIDIA L40S, Blackwell images
│       └── certs/                  # Certification badges
│
├── docs/                           # Documentation (from mockup project)
└── package.json
```

---

## 🎨 Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4 |
| **UI Components** | shadcn/ui |
| **Primitives** | Radix UI |
| **Icons** | Lucide React |
| **Motion** | Framer Motion |
| **Charts** | ECharts (to be added) |
| **Forms** | React Hook Form + Zod (to be added) |

---

## 🎯 Design System

### Colors (Cloud Slate / Deep Azure)

```ts
// src/lib/tokens.ts
{
  background: {
    canvas: '#0b1730',
    subtle: '#10213a',
  },
  surface: {
    default: '#122640',
    elevated: '#172d49',
  },
  text: {
    primary: '#f7f9fc',
    secondary: '#b3c0d2',
    muted: '#9aa8bc',
  },
  brand: {
    blue: '#3d8dff',
    violet: '#7767ff',
    gradient: 'linear-gradient(90deg, #3d8dff, #7767ff)',
  },
  status: {
    success: '#73d9a3',
    warning: '#e1b96e',
    danger: '#ed5d67',
  },
}
```

### Typography

- **Font:** Inter (Google Fonts)
- **Sizes:** 12px → 80px (13 steps)
- **Line Heights:** 16px → 84px

### Spacing

- **Section:** 78px (desktop), 58px (mobile)
- **Card:** 24px
- **Gaps:** 8px, 16px, 24px, 32px, 40px

---

## 📄 Pages (To Implement)

| Page | Route | Status |
|------|-------|--------|
| **Homepage** | `/` | ⏳ Pending |
| **GPU Cloud** | `/gpu-cloud` | ⏳ Pending |
| **Solutions** | `/solutions` | ⏳ Pending |
| **Infrastructure** | `/infrastructure` | ⏳ Pending |
| **Pricing** | `/pricing` | ⏳ Pending |
| **Benchmark** | `/benchmark` | ⏳ Pending |
| **Company** | `/company` | ⏳ Pending |
| **Contact** | `/contact` | ⏳ Pending |

---

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start dev server on port 3333

# Production
npm run build        # Build for production
npm run start        # Start production server on port 3333

# Code Quality
npm run lint         # Run ESLint
```

---

## 📸 Assets

### Logos
- `cross-engine-full.png` — Full logo (Company page)
- `cross-engine-navbar.png` — Navbar logo (all pages)
- `nutanix-ahv.png` — Nutanix AHV logo (Infrastructure page)

### GPU Images
- `l40s.jpg` — NVIDIA L40S (101KB)
- `blackwell.jpg` — NVIDIA Blackwell (291KB)

### Certifications
- `csa-star.png`
- `iso27001.png`
- `iso27017.png`
- `iso22301.png`
- `iso20000.png`
- `soc2.png`

**Location:** `public/images/`

---

## 🚦 Port Configuration

**Development:** `localhost:3333`  
**Production:** `localhost:3333` (or deploy to Vercel)

**Why 3333?**
- ✅ No conflicts with Grafana (3000)
- ✅ No conflicts with vLLM (8000)
- ✅ Easy to remember

---

## 📋 Implementation Plan

### Phase 1: Foundation ✅ (Days 1-2)
- [x] Next.js project setup
- [x] Tailwind + design tokens
- [x] shadcn/ui components
- [x] Layout components (Header, Footer)
- [x] Mobile navigation
- [ ] Homepage (in progress)

### Phase 2: Homepage (Days 3-4)
- [ ] Hero section
- [ ] Platform diagram
- [ ] GPU showcase
- [ ] Why grid
- [ ] Certifications

### Phase 3: Core Pages (Days 5-8)
- [ ] GPU Cloud
- [ ] Pricing
- [ ] Infrastructure
- [ ] Solutions

### Phase 4: Supporting Pages (Days 9-10)
- [ ] Benchmark
- [ ] Company
- [ ] Contact
- [ ] Motion + Accessibility

### Phase 5: Testing (Days 11-12)
- [ ] E2E tests
- [ ] Responsive QA
- [ ] Performance optimization
- [ ] Production build

---

## 🎯 Definition of Done

A page is complete when:
- ✅ Matches V9 mockup visually
- ✅ Uses design tokens (no hard-coded values)
- ✅ Responsive at all breakpoints (1440, 1280, 1024, 768, 390)
- ✅ Keyboard accessible
- ✅ Focus states visible
- ✅ No overlap or clipping
- ✅ Assets load correctly
- ✅ No console errors
- ✅ Production build passes
- ✅ Visual QA checklist passes

---

## 📚 Documentation

- **Design Audit:** `../cross-engine-gpu-cloud-v9-2-hermes-ready/docs/design-audit.md`
- **Component Inventory:** `../cross-engine-gpu-cloud-v9-2-hermes-ready/docs/component-inventory.md`
- **Page Inventory:** `../cross-engine-gpu-cloud-v9-2-hermes-ready/docs/page-inventory.md`
- **Frontend Architecture:** `../cross-engine-gpu-cloud-v9-2-hermes-ready/docs/frontend-architecture.md`
- **Implementation Plan:** `../cross-engine-gpu-cloud-v9-2-hermes-ready/docs/implementation-plan.md`
- **Asset Inventory:** `../cross-engine-gpu-cloud-v9-2-hermes-ready/ASSET-INVENTORY.md`

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Production
vercel --prod
```

### Self-Hosted

```bash
# Build
npm run build

# Start
npm run start
```

---

## 📞 Support

For questions or issues, refer to:
- Next.js docs: https://nextjs.org/docs
- shadcn/ui docs: https://ui.shadcn.com
- Tailwind CSS docs: https://tailwindcss.com

---

**Built with ❤️ by Cross Engine Team**
