# MoghDevStudio — Agency Website

A complete, modern agency website built with **Next.js 14 App Router**, **Tailwind CSS**, and **TypeScript**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
# → Open http://localhost:3000

# 3. Build for production
npm run build && npm start
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout (Navbar + Footer)
│   ├── globals.css          # Global styles, animations, utilities
│   ├── page.tsx             # Home page
│   ├── services/page.tsx    # Services page
│   ├── portfolio/page.tsx   # Portfolio page
│   ├── about/page.tsx       # About page
│   └── contact/page.tsx     # Contact page (with form)
│
└── components/
    ├── layout/
    │   ├── Navbar.tsx        # Sticky responsive navbar
    │   └── Footer.tsx        # Site footer
    ├── sections/
    │   ├── Hero.tsx          # Hero section with animated elements
    │   ├── ServicesPreview.tsx  # Services cards grid
    │   ├── PortfolioPreview.tsx # Portfolio preview cards
    │   ├── WhyChooseUs.tsx   # 3-feature benefits section
    │   └── CTA.tsx           # Call-to-action banner
    └── ui/
        ├── SectionHeader.tsx   # Reusable section header
        └── AnimateOnScroll.tsx # Intersection Observer animation wrapper
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary Color | `#2563EB` (Blue-600) |
| Dark Background | `#0F172A` (Slate-900) |
| Font (Display) | Syne (700–800) |
| Font (Body) | DM Sans (300–500) |
| Border Radius | `rounded-2xl` / `rounded-3xl` |

### Utility CSS Classes
- `.gradient-text` — Blue gradient text
- `.glow-text` — Blue text glow
- `.chip` — Badge/label component
- `.btn-primary` — Primary CTA button
- `.btn-outline` — Outline button
- `.card-hover` — Lift-on-hover card effect
- `.border-glow` — Hover border highlight
- `.grid-bg` — Subtle grid background pattern
- `.section-pad` — Consistent section vertical padding
- `.animate-on-scroll` + `.visible` — Scroll-triggered fade-up

---

## 📄 Pages

### Home (`/`)
- Hero with animated code blocks and stats
- Services preview (4 cards)
- Portfolio preview (3 projects)
- Why Choose Us (3 features)
- CTA banner

### Services (`/services`)
- Full-page hero
- Detailed cards: Website Dev, Mobile App, UI/UX Design, Redesign
- Each card includes: description, benefits checklist, tech stack

### Portfolio (`/portfolio`)
- Full project grid (6 projects)
- Mock browser-chrome thumbnails
- Category badges, tech stack tags

### About (`/about`)
- Mission & story section
- Animated stats card
- Core values (3 pillars)

### Contact (`/contact`)
- Contact method cards (Email, Instagram, Form)
- Functional contact form with loading + success states

---

## 🔧 Customization

### Update Contact Info
Edit `src/components/layout/Footer.tsx` and `src/app/contact/page.tsx`:
```tsx
email: "moghdevstudio@gmail.com"
instagram: "@MoghDevStudio"
```

### Add Real Portfolio Images
Replace the emoji mock-ups in `src/app/portfolio/page.tsx` with `<Image>` components using Unsplash or your own assets.

### Connect Contact Form
Replace the `setTimeout` in `contact/page.tsx` with a real API call:
```tsx
await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
```

---

## 🌐 SEO

All pages use Next.js `Metadata` API:
- Title templates
- Meta descriptions
- OpenGraph tags
- Twitter card meta

---

## 📱 Responsive Breakpoints

- Mobile: `< 640px` — stacked layouts, hamburger menu
- Tablet: `640px–1024px` — 2-column grids
- Desktop: `> 1024px` — full layouts, floating decorations
