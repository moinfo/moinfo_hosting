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
| Domain Search | Search input → MoBilling domain order, TLD pricing pills |
| Pricing Plans | 6 categories with monthly/yearly toggle |
| Features | 6-card grid (uptime, SSL, cPanel, support, etc.) |
| Web Design Promo | Service promotion with feature list |
| Stats | Animated counters (scroll-triggered) |
| CTA | Gradient call-to-action |
| Footer | 4-column layout, social links, TCRA badge |

## Integrations

- **MoBilling** — Client portal at `mobilling.co.tz`. Login, order and domain
  links all come from `src/data/mobilling.ts`; nothing else hardcodes a portal
  URL. Order links are `/order/<category>?plan=<slug>` and the slug → product
  mapping is documented there in `PLAN_SLUG_TO_PRODUCT`. Replaced WHMCS in
  July 2026.
- **Tawk.to** — Live chat widget
- **TCRA** — Accredited .tz domain registrar badge

## Cloud VPS (resold Linode / Akamai Cloud)

Shown on `/vps` under the MIT plans, priced in TZS, monthly.

- **Data / the only place to change prices:** `src/data/cloud-vps.ts`
- **Component:** `src/components/sections/CloudVpsPlans.tsx`
- **Text (EN/SW):** `cloudVps.*` keys in `src/i18n/en.ts` and `sw.ts`
- **Ordering:** `cloudVpsOrderUrl()` deep-links to MoBilling
  `/order/cloud-vps?plan=<slug>`. Every slug must have a matching entry in
  `PLAN_SLUG_TO_PRODUCT` (`src/data/mobilling.ts`, keys `cloud-vps/<slug>`) and
  a product of that name in MoBilling.

**Price formula (TZS / month):**
`ceil(usdCost x USD_TO_TZS x (1 + MARKUP) / ROUND_TO) x ROUND_TO`

| Knob | Where | Meaning |
|------|-------|---------|
| `USD_TO_TZS` | `cloud-vps.ts` | TZS per USD. Currently 3000. |
| `MARKUP` | `cloud-vps.ts` | Margin on Linode's price. Currently 0.30, a **placeholder**. |
| `ROUND_TO` | `cloud-vps.ts` | Round up to nearest N TZS (500). |
| `usdCost` | per plan | Linode's list price (akamai.com/cloud/pricing/cpu). Update when Linode changes it. |
| `priceTzs` | per plan | Fixed TZS price; ignores the formula for that plan. |
| `hidden` | per plan | Hide a plan without deleting it. |

**Change prices:** the site is a static export, so there is no admin panel.
Edit `cloud-vps.ts`, then rebuild and deploy:

```bash
cd /var/www/moinfo_hosting
npm run build
grep -rq "localhost:8000" out/ && echo BAD || echo clean
rsync -a /var/www/moinfo.co.tz/ /var/backups/moinfo-$(date +%F-%H%M)/   # backup
rsync -a --delete out/ /var/www/moinfo.co.tz/
```

**Add a plan:** add an object to `cloudVpsPlans`, add its
`"cloud-vps/<slug>": "<Product name>"` line to `PLAN_SLUG_TO_PRODUCT`, and
create the product in MoBilling.

**Notes:** the cost does not include Linode backups or transfer overage
($0.005/GB). The public name is "Cloud ..." (Linode is an Akamai trademark);
the description says "Akamai Cloud (Linode)". G8 plans are billed hourly only,
so they are not listed.

## `/portal` is gone (410)

The old WHMCS portal (hit by a Japanese keyword spam hack) was retired. nginx
returns **410 Gone** for `/portal*` via `location ^~ /portal` in
`/etc/nginx/sites-available/moinfo.co.tz`. Do not add `Disallow: /portal/` to
`robots.txt`, so Google can see the 410. Remove old URLs in Search Console
(Removals -> prefix `https://moinfo.co.tz/portal/`).

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Blue | `#1a6fc4` | Primary, CTAs |
| Green | `#2eb67d` | Secondary, success states |
| Yellow | `#f9c846` | Accent, highlights |
| Orange | `#f58220` | Accent, warnings |

## License

Private — MoinfoTech Ltd.
