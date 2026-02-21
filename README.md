# Moinfo Hosting

Modern web hosting homepage for [MoinfoTech](https://moinfotech.co.tz) — Tanzania's trusted hosting provider. Built with Next.js 15 and Mantine UI v8.

## Tech Stack

- **Next.js 15** — App Router, TypeScript, Turbopack
- **Mantine v8** — UI components, hooks, theming
- **Tabler Icons** — Icon library
- **CSS Modules** — Component-scoped styles
- **PostCSS** — Mantine preset with `light-dark()` support

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server (Turbopack)
npm run dev

# Production build
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── layout.tsx        # Root layout (MantineProvider, fonts, shell)
│   ├── page.tsx          # Homepage (assembles all sections)
│   └── globals.css       # Global resets
├── theme/                # Mantine theme config
│   ├── index.ts          # createTheme() — colors, fonts, defaults
│   └── colors.ts         # Brand color palettes
├── components/
│   ├── layout/           # TopBar, Header, Footer
│   ├── sections/         # Hero, DomainSearch, PricingPlans, Features,
│   │                     # WebDesignPromo, Stats, CTA
│   └── ui/               # ThemeToggle, PricingCard, SectionHeader, TawkTo
├── data/                 # Static data (pricing, domains, company info)
└── hooks/                # useScrolled, useAnimatedCounter
```

## Homepage Sections

| Section | Description |
|---------|-------------|
| TopBar | Contact links (phone, WhatsApp, email), promo badge |
| Header | Logo, navigation, theme toggle, mobile drawer |
| Hero | Headline, trust badges, CTAs, floating service cards |
| Domain Search | Search input → WHMCS, TLD pricing pills |
| Pricing Plans | 6 categories with monthly/yearly toggle |
| Features | 6-card grid (uptime, SSL, cPanel, support, etc.) |
| Web Design Promo | Service promotion with feature list |
| Stats | Animated counters (scroll-triggered) |
| CTA | Gradient call-to-action |
| Footer | 4-column layout, social links, TCRA badge |

## Integrations

- **WHMCS** — Order links and domain search redirect to `moinfo.co.tz/portal`
- **Tawk.to** — Live chat widget
- **TCRA** — Accredited .tz domain registrar badge

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Blue | `#1a6fc4` | Primary, CTAs |
| Green | `#2eb67d` | Secondary, success states |
| Yellow | `#f9c846` | Accent, highlights |
| Orange | `#f58220` | Accent, warnings |

## License

Private — MoinfoTech Ltd.
