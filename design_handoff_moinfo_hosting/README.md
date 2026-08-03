# Handoff: Moinfo Hosting — site redesign + client portal

## Overview

A full redesign of **moinfo.co.tz** (MoinfoTech, a TCRA-accredited .tz domain registrar and hosting provider in Kibaha, Tanzania), plus a complete rebuild of the authenticated **client portal**.

The work covers 26 screens in two groups:

- **Public marketing site** — homepage (two competing directions), service pages, domains, web design, features, knowledge base, transfer, policies, contact.
- **Client portal** — login, dashboard, ordering, billing (invoices, payments, statement, quotations, credit notes), services (hosting, domains, subscriptions), support tickets, news, profile and portal users.

The design goal throughout: replace generic hosting-template patterns with an **infrastructure control-room** aesthetic — dark, dense, monospace-labelled, precise. In the portal specifically, the redesign is action-first: what the customer must act on (overdue invoices, expiring domains, a disk at 90%) leads every page instead of being buried under empty-state cards.

## About the design files

The files in this bundle are **design references created in HTML** — prototypes showing intended look and behaviour, not production code to copy directly.

They are authored as "Design Components": each `.dc.html` file contains a template with `{{ }}` value holes and `<sc-for>` / `<sc-if>` control flow, plus a `Component` logic class. `support.js` is a bundled runtime for that format. **Do not port `support.js` or the `.dc.html` template syntax.** Read the files for layout, styling, copy and state behaviour, then recreate the screens in the target codebase's own environment (React, Vue, Laravel Blade, whatever the real portal runs on) using its established patterns.

If no frontend environment exists yet, pick the framework that best fits the backend — the portal screenshots this was based on came from a WHMCS-style billing system, so server-rendered templates or a React SPA against the billing API are both reasonable.

`Site Header`, `Site Footer` and `Portal Sidebar` are shared components used by every page in their group; they should become real shared components in the target codebase.

## Fidelity

**High fidelity.** Final colours, typography, spacing and interaction states. All values below are exact and are used literally in the files (inline styles throughout — there is no stylesheet to extract). Recreate pixel-accurately using the codebase's own component library where one exists.

Canvas width is a fixed **1440px** for every screen. No responsive breakpoints were designed — see "Responsive behaviour" below.

## Design tokens

### Colour — surfaces (dark, used by everything except homepage direction 1b)

| Token | Hex | Use |
|---|---|---|
| Page background | `#0C1116` | Default page surface |
| Surface alt | `#0A0E12` | Alternating full-width sections, table rows |
| Surface deep | `#070A0D` | Top utility bar, sidebar, footer, input fields |
| Surface raised | `#0F151A` | Dropdown menu items |
| Hairline | `rgba(255,255,255,0.08)` | Section dividers, table row borders |
| Border | `rgba(255,255,255,0.12)` | Card and panel borders |
| Border strong | `rgba(255,255,255,0.16)` | Input borders, secondary buttons |
| Card fill | `rgba(255,255,255,0.02)` | Subtle card background |
| Header bar fill | `rgba(12,17,22,0.92)` | Sticky nav / portal topbar |

### Colour — text

| Token | Hex | Use |
|---|---|---|
| Primary | `#FFFFFF` | Headings, values, active nav |
| Body | `#DCE3DF` | Long-form body copy in cards |
| Secondary | `#9AA6A1` | Paragraph text, table cells |
| Muted | `#8B968F` | Supporting copy |
| Nav idle | `#B6C0BB` | Inactive nav items |
| Label | `#7F8C86` | Mono field labels, table headers |
| Faint | `#5C665F` / `#4E5A55` | Placeholder text, disabled hints |

> Contrast note: `#5C665F` on `#0C1116` sits near the AA floor at 10–11px. It is used only for non-essential hints. Prefer `#7F8C86` for anything a user must read.

### Colour — brand & semantic

| Token | Hex | Use |
|---|---|---|
| Brand blue | `#0B5CD5` | Logo gradient start, primary CTA on light surfaces |
| Brand green | `#0A8F63` | Logo gradient end |
| Accent green | `#29D08A` | Primary CTA fill, active/success state, uptime bars |
| Accent green text | `#7BE3B4` | Kickers, links, prices on dark |
| Accent green deep | `#06231A` | Text **on** `#29D08A` buttons |
| Accent blue | `#4A9BFF` | Secondary accent, "Hosting" wordmark, link hover |
| Accent blue text | `#7FB4FF` | cPanel buttons, info tags |
| Accent blue deep | `#04122A` | Text on `#4A9BFF` buttons |
| Warning | `#F2A33C` | Overdue, expiring, attention banners |
| Warning deep | `#2A1A05` | Text on `#F2A33C` buttons |
| Danger | `#FF7B72` | Expired, overdue amounts, destructive actions |

Tinted fills follow one rule — `rgba(<accent>, 0.12–0.16)` for the fill, `rgba(<accent>, 0.35–0.45)` for the border:

- green `rgba(41,208,138,0.14)` / `rgba(41,208,138,0.45)`
- blue `rgba(74,155,255,0.14)` / `rgba(74,155,255,0.40)`
- amber `rgba(242,163,60,0.07)` / `rgba(242,163,60,0.35)`
- red `rgba(255,123,114,0.14)` / — (text only)

### Colour — light surfaces (homepage direction 1b only)

`#FBFBF9` page, `#F2F3EF` alt section, `#DFE1DA` border, `#EEF1F5` hairline, `#14181C` primary text, `#3D443B` body, `#6B726A` secondary, `#8A9188` muted, `#0F1A2E` dark inversion band, `#12A46F` green, `#0A7A55` green text, `#0B5CD5` blue.

### Typography

Three families, loaded from Google Fonts:

| Family | Weights | Use |
|---|---|---|
| **Space Grotesk** | 400, 500, 600, 700 | Headings, UI labels, buttons, nav — the default `font-family` on every page root |
| **Instrument Sans** | 400, 500, 600, 700 | Body paragraphs and descriptive copy — set explicitly per element |
| **JetBrains Mono** | 400, 500, 600 | Every number, price, date, ID, status tag and eyebrow label |

The mono/sans split is the core of the aesthetic: **any value that is data — a price, a date, a quota, a domain, an invoice number, a percentage — is set in JetBrains Mono.** Prose is never mono.

Type scale as used:

| Role | Size | Weight | Letter-spacing | Line-height |
|---|---|---|---|---|
| Hero h1 (marketing) | 62–68px | 600 | −0.035em | 0.98–1.0 |
| Section h2 | 40px | 600 | −0.03em | 1.05 |
| Page h1 (portal) | 34px | 600 | −0.03em | default |
| Sub-section h2 | 28–32px | 600 | −0.025em | 1.08 |
| Big stat | 26–36px | 600 | −0.02em | default |
| Card title | 17–20px | 600 | −0.02em | default |
| Row title | 14.5–16px | 600 | — | default |
| Body large | 16.5–17.5px | 400 | — | 1.6–1.65 |
| Body | 14–15.5px | 400 | — | 1.6–1.7 |
| Table cell | 13–14.5px | 400 | — | default |
| Mono value | 12–13.5px | 400–500 | — | default |
| Mono label / eyebrow | 10–11.5px | 400 | **0.12–0.16em**, uppercase | default |
| Micro tag | 9.5–10.5px | 400–600 | 0.1–0.12em, uppercase | default |

Eyebrow labels are always uppercase mono with wide tracking, usually `#7BE3B4` on marketing pages and `#7F8C86` on portal panels. Section eyebrows on marketing pages are numbered: `01 · PLANS`, `02 · WHAT YOU GET`.

### Spacing

4px base. Values in use: 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 40, 44, 48, 56, 64, 72, 76, 90, 96.

- Marketing section padding: `90px 40px` (dark) or `76px 44px`
- Portal content padding: `32px`
- Card padding: `22–30px`
- Table row padding: `14–16px 22px`
- Grid gaps: `20px` (cards), `24px` (panels), `1px` (hairline-separated grids), `64px` (two-column marketing splits)

### Radius

`4px` micro · `5px` tab pill · `6–7px` chips and small buttons · `8–9px` buttons and inputs · `10px` inner panels · `12px` cards and tables · `20px` status pills · `50%` avatars and dots.

### Shadows

Used sparingly. Dropdown menus: `0 24px 60px -20px rgba(0,0,0,0.7)`. Light-mode cards: `0 24px 60px -24px rgba(20,24,28,0.35)`. Marketing page shells on the options canvas: `0 30px 80px -30px rgba(12,17,22,0.55)`.

### Signature treatments

Reproduce these three or the design loses its character:

1. **Grid texture** — on every marketing hero, an absolutely positioned overlay:
   ```css
   background-image:
     linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
     linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
   background-size: 80px 80px;
   pointer-events: none;
   ```
2. **Radial brand wash** — behind the grid on hero sections:
   ```css
   background:
     radial-gradient(900px 420px at 20% 0%, rgba(11,92,213,0.28), transparent 70%),
     radial-gradient(720px 400px at 88% 30%, rgba(10,143,99,0.22), transparent 70%),
     #0C1116;
   ```
3. **Hairline grids** — stat strips and feature grids are a `display: grid` with `gap: 1px` over a `rgba(255,255,255,0.1)` background, each cell painted the page colour. This yields exact 1px dividers with no border doubling.

## Screens

### Public site

#### 1. Homepage — `Moinfo Hosting Redesign.dc.html`
An options canvas holding **two complete competing directions** side by side, each a 1440px page shell. This file is a design-review artifact; ship one direction, not the canvas.

- **1a "Control Room"** — dark. Utility bar (status dot + phone numbers + WhatsApp + email, mono 12px, `#070A0D`, 40px tall) → 76px nav → dismissible Saba Saba promo band (`linear-gradient(90deg, #0B5CD5, #0A8F63)`, 38px) → hero with terminal-style domain field and a right-hand price index rail → 4-up stat strip → plans (3 recommended cards + expandable full 6) → features grid → web-design split → testimonials → gradient CTA → footer → WhatsApp/chat/world-clock bar.
- **1b "Registry"** — light, ruled, document-like. Everything on a shared grid, no floating cards, prices as an index. Same content, opposite temperament.

The `Site Header` / `Site Footer` components were derived from 1a; all subsequent pages use them, so **1a is the direction the rest of the site assumes.**

#### 2. Shared header — `Site Header.dc.html`
Props: `active` (`home|hosting|domains|design|features|contact`), `crumb` (breadcrumb text).

Three stacked bars: 40px utility bar → 76px nav → 40px breadcrumb. Nav: logo lockup (34px gradient rounded square + "Moinfo Hosting" with `.tz` registrar micro-line) · nav links at 14.5px `#B6C0BB`, active gets `#FFF` + `2px solid #29D08A` bottom border · Hosting opens a hover dropdown (264px single column, 5 items, price on the right in mono `#7BE3B4`) · right cluster is EN/SW toggle, "Client Area" outline button, "Get started" green button.

The nav matches the live site exactly: **Home, Hosting ▾, Domains, Web Design, Features, Contact** — dropdown items **Web Hosting, Email Hosting, VPS Hosting, Dedicated Server, Linux Reseller**.

Header children need `flex-shrink: 0` and `white-space: nowrap` — the cluster needs ~1012px and will crop below that.

#### 3. Shared footer — `Site Footer.dc.html`
Gradient CTA band (`linear-gradient(100deg, #0B5CD5, #0A8F63)`, 66px vertical padding) → 4-column footer on `#0A0D10`: brand block (44px logo, italic green tagline "Making Technology work for you", 42px circular social buttons, TCRA badge) · Hosting Services · Resources · Contact Us (each contact row has a 40px rounded icon tile) → legal bar with status dot and world clocks.

Column headings are 17px/700 preceded by a 7px coloured dot — blue for Services, green for Resources, amber for Contact.

#### 4–8. Service pages
`Web Hosting`, `Email Hosting`, `VPS Hosting`, `Dedicated Server`, `Linux Reseller` — one template: breadcrumb → hero (eyebrow, 62px h1, 54ch lede, two CTAs, 2×2 stat panel) → plans → features hairline grid → footer.

- **Web Hosting** ships a Cards / Comparison-table toggle over all six tiers.
- **VPS** uses a table rather than cards (specs are the product).
- **Dedicated Server** has no prices — three reference builds and a quote form.

Pricing data (TSh/yr): University 80,500 · Personal 120,000 · Professional 150,000 (highlighted) · Premier 200,000 · System 250,000 · Plus 500,000. Email: Starter 60,000 · Business 180,000 · Enterprise 420,000. VPS (TSh/mo): 25,750 / 51,500 / 103,000 / 206,000. Reseller: 350,000 / 750,000 / 1,800,000.

#### 9. Domains — `Domains.dc.html`
Hero with domain search → full TLD price table (`.co.tz`, `.or.tz`, `.ac.tz`, `.sc.tz`, `.go.tz`, `.ne.tz`, `.me.tz` all TSh 19,999; `.tz` 95,000; `.com` 55,000) with a "who it's for" column → 4-step transfer flow → feature grid.

#### 10. Web Design — `Web Design.dc.html`
Hero + price panel → 8 numbered services → 6 portfolio placeholders (dashed 135° repeating-linear-gradient tiles, labelled `PROJECT SCREENSHOT`) → 5-week process → quote form.

#### 11. Features · 12. Knowledge Base · 13. Transfer to Us · 14. Policies · 15. Contact
- **Features** — 4 groups (Platform, Security, Support, Commercial) × 8 items, alternating section backgrounds, then a 4-up "where next".
- **Knowledge Base** — search bar + 24 articles in 4 categories with read-time labels.
- **Transfer to Us** — 5-step migration flow, what-we-move grid, request form.
- **Policies** — one page, 5 tabs (Privacy, Terms, Hosting Policy, Acceptable Use, GDPR) with numbered clauses in a sticky-sidebar layout.
- **Contact** — 4 channel tiles across the full width, office block with map placeholder, opening hours grid, contact form with subject chips, 4 department cards.

### Client portal

#### 16. Login — `Client Area Login.dc.html`
Two equal columns, min-height 900px.

Left: brand gradient `linear-gradient(165deg, #0B5CD5 0%, #0A4FA8 42%, #0A8F63 100%)` with the 72px grid overlay and a 520px translucent circle bleeding off the top-right. Logo top, 50px headline + 4 perk rows middle, status/uptime tiles bottom.

Right: 76px bar (back link, EN/SW, "Need help?") → centred 452px form → 58px legal bar. Form has **Password / SMS-code tabs** that swap the identifier label, placeholder and submit label; a real show/hide password toggle; a keep-me-signed-in checkbox; and two quick links straight to cPanel and Webmail.

#### 17. Portal sidebar — `Portal Sidebar.dc.html`
244px, `#070A0D`, full height. 68px logo header → 5 labelled groups (Overview, Services, Billing, Support, Account) → status/logout footer.

Items are 14px, idle `#9AA6A1` with a `#3D453F` `▸` marker; active gets `rgba(74,155,255,0.14)` fill, `#FFF` text, 600 weight and a `#4A9BFF` marker. Counts render as pill badges; **Invoices carries an amber `5` badge** (`rgba(242,163,60,0.18)` / `#F2A33C`).

Grouping matters — the original had 17 flat items and was unscannable.

#### 18. Dashboard — `Client Portal.dc.html`
68px topbar (search field, "Order services" green button, avatar + account number) then, in order:

1. Greeting + last sign-in.
2. **"Needs your attention" band** — amber-bordered, two cards: *5 invoices overdue, TSh 1,116,000, oldest 22 days* → amber "Pay now"; *whitestar.co.tz expires in 12 days, auto-renew off* → green "Renew". This band is the whole point of the redesign; it must stay above the fold.
3. 4-up stat strip: Services 6 · Domains 11 · Open tickets 0 (green) · Unpaid invoices 5 (amber).
4. Two-column body (`1fr 330px`): active-services table with **disk-usage bars** (green <65%, amber 65–84%, red ≥85% — mailmojashop.co.tz sits at 90%), billing panel with four properly formatted totals and three invoice rows, then domain-register and support cards. Right rail: account card, shortcuts, wallet, 30-day uptime bar chart.

The services table must pin its actions column to a fixed `150px` in **both** header and rows — `auto` resolves differently per row and misaligns every column.

#### 19. Order Services — `Order Services.dc.html`
Three states in one page: **catalogue** (7 service cards with "from" prices) → **plan list** (yearly/monthly toggle, spec rows, highlighted recommended tier) → **checkout** (domain choice radio group, payment-method chips, order summary with free setup/migration lines).

#### 20. Invoices — `Invoices.dc.html`
List: 4 stats, filter tabs (All / Unpaid (6) / Paid / Overdue (5)), "Pay all 5 overdue — TSh 769,998" button, table with overdue rows tinted `rgba(255,123,114,0.04)` and a days-overdue sub-label under each due date.

Detail: invoiced-to / pay-to blocks, line-item table, subtotal → paid → balance-due stack, right rail with pay-now panel (M-Pesa / Tigo Pesa / Airtel Money / Card chips), bank + MIX by YAS details, and a query link. Transactions section states plainly when there are none.

#### 21–23. Payments · Statement · Quotations
- **Payments** — filterable by Pesapal / bank / mobile money, real reference numbers, PDF receipt links.
- **Statement** — period selector, debit/credit/running-balance table with a closing-balance summary row.
- **Quotations / Credit notes** — one page, two tabs, with a designed empty state (never a bare "No quotations found" row).

#### 24–26. My Hosting · My Domains · Subscriptions
- **My Hosting** — 6 accounts with disk bars; detail view has account facts (server, IP, cycle) and a 9-tile cPanel shortcut grid.
- **My Domains** — 11 domains with SSL sub-labels and expired/expiring tinting; detail view has 6 tabs: Overview, Auto-renew (working toggle), Nameservers, Add-ons, Contact information, EPP code (reveal/hide).
- **Subscriptions** — renewing-soon banner, days-left progress bars, annual-commitment totals.

#### 27–29. Support Tickets · News · Profile
- **Support Tickets** — "is the site down right now?" call/WhatsApp band above the list; new-ticket form where choosing a priority updates the stated response target (Urgent 15 min · High 1 hr · Normal 4 hr).
- **News** — filterable announcements, status card, planned-maintenance list.
- **Profile / Portal Users** — details form, company facts, notification toggles, security card (2FA not enabled), recent activity; second tab lists 3 users with roles and states.

## Interactions & behaviour

All interactivity is local component state — no routing, no data fetching in the prototypes.

| Screen | Behaviour |
|---|---|
| Site header | Hosting dropdown opens on `mouseenter`, closes on `mouseleave` of the wrapper. Menu is absolutely positioned at `top: 76px; left: -24px; z-index: 40`. |
| Homepage | Promo banner visibility is a prop; "Show all 6 plans" expands a comparison table below the three cards. |
| Web Hosting | Cards ↔ Comparison-table view toggle. |
| Policies | 5 document tabs swap the whole clause list and the sticky sidebar heading. |
| Login | Password/SMS tab switch changes label, placeholder and button text; show/hide password swaps `input type`; remember-me checkbox. Submit navigates to the dashboard. |
| Order Services | catalogue → plans → checkout, with back links; billing-cycle toggle; domain-source radios; payment-method chips. |
| Invoices | Four status filters; clicking an invoice number or Pay opens the detail view; payment-method chips drive the "Pay with X" button label. |
| My Domains | Six manage tabs; auto-renew toggle flips the card border, fill, track and knob and updates the Overview fact row; EPP reveal/hide swaps `••••••••••••` for the code. |
| Support Tickets | Filters; new-ticket form where the department and priority chips are single-select and priority drives the SLA line. |
| Profile | Four notification toggles. |

**Hover states.** Links: `#7BE3B4` → `#4A9BFF` (dark pages) or `#0B5CD5` → `#0A8F63` (light). Order-Services category cards lift their border to `rgba(41,208,138,0.5)`. Everything else relies on cursor change only — add the codebase's standard hover feedback on rows and buttons.

**Transitions.** None were specified. Apply the codebase's default (a 120–160ms ease on colour and border is appropriate — nothing should slide or scale).

**Not designed** — implement per your own conventions: loading skeletons, error and validation states, toasts, focus rings (must be visible — inputs currently only set `outline: none` with a `style-focus` border), disabled states, pagination beyond the visible rows, and the actual dark/light theme switch (the reference product has a moon icon; only the dark treatment was designed).

## State management

Per-screen local state only. The variables the prototypes use:

- Header: `menu: boolean`
- Homepage: `allPlansA`, `allPlansB`, `menuA`, `menuB`
- Web Hosting: `view: 'cards' | 'table'`, `menu`
- Policies: `tab: 'privacy' | 'terms' | 'hosting' | 'aup' | 'gdpr'`
- Login: `mode: 'password' | 'otp'`, `showPw`, `remember`, `identifier`, `password`
- Order Services: `view: 'index' | 'detail' | 'checkout'`, `cat`, `cycle`, `plan`, `domainMode`, `pay`
- Invoices: `view: 'list' | 'detail'`, `filter`, `open` (invoice no), `pay`
- My Hosting / My Domains: `view`, `open` (domain), plus `tab`, `auto`, `showEpp` on domains
- Subscriptions / Payments / Statement / News / Tickets: `filter` (+ `range`, `dept`, `priority`, `view`)
- Profile: `tab`, `notify: { invoices, expiry, tickets, offers }`

Real data requirements: customer profile, services with live disk/bandwidth usage, domains with expiry + SSL + auto-renew flags, invoices with line items and status, payments with gateway references, statement ledger, subscriptions, tickets, announcements, portal users.

## Responsive behaviour

**Not designed.** Every screen is a fixed 1440px canvas. Sensible reductions when implementing:

- Marketing: two-column splits stack under ~900px; `repeat(3, 1fr)` plan grids → 2 → 1; hero type scales from 62px down to ~36px; nav collapses to a drawer.
- Portal: sidebar collapses to icons then a drawer; tables need horizontal scroll or a card layout on mobile — they carry 6–7 columns and will not compress.
- The header cluster is the tightest constraint at ~1012px.

## Content

All copy in the files is final and deliberate — plain-spoken, specific, no hosting-industry filler. Prices, phone numbers (+255 689 011 111 / +255 651 034 582), the Kibaha address (Njuweni Hotel, 1st Floor, Room 134, Mail Moja), TIN 172-200-664, bank details (CRDB 0150851484300, MIX by YAS 15210089) and the TLD price list are real and should carry over.

Portal data is **representative sample data** modelled on the real account screenshots (Kassim Haji Kassim / Leruma Enterprises, account #10428) — replace with live data.

## Assets

**No image assets exist.** Everything is CSS and type:

- The logo is a placeholder — a 32–44px rounded square with `linear-gradient(140deg, #0B5CD5, #0A8F63)` and a white "M". **Swap in the real MoinfoTech mark.**
- Social, contact and cPanel icons are mono text stubs (`fb`, `ig`, `in`, `X`, `@`, `tel`, `www`, `loc`, `⌕`, `▸`, `→`, `✓`, `✕`, `▾`). Replace with the codebase's icon set.
- Image placeholders — dashed or `repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0 12px, transparent 12px 24px)` tiles labelled `PROJECT SCREENSHOT`, `CLIENT SITE`, `TEAM / OFFICE PHOTO`, `DATA CENTRE / RACK PHOTO`, `MAP PLACEHOLDER`. Real photography is still needed for the web-design portfolio, the team/office shots and the contact map.
- Fonts load from Google Fonts: `Space Grotesk:wght@400;500;600;700`, `Instrument Sans:wght@400;500;600;700`, `JetBrains Mono:wght@400;500;600`. Self-host for production.

## Files

Public site:

| File | Screen |
|---|---|
| `Moinfo Hosting Redesign.dc.html` | Homepage — directions 1a and 1b |
| `Site Header.dc.html` | Shared marketing header |
| `Site Footer.dc.html` | Shared marketing footer |
| `Web Hosting.dc.html` | Web hosting |
| `Email Hosting.dc.html` | Business email |
| `VPS Hosting.dc.html` | Linux VPS |
| `Dedicated Server.dc.html` | Dedicated servers |
| `Linux Reseller.dc.html` | Reseller hosting |
| `Domains.dc.html` | Domains + TLD pricing |
| `Web Design.dc.html` | Studio / web design |
| `Features.dc.html` | Full feature list |
| `Knowledge Base.dc.html` | Help articles |
| `Transfer to Us.dc.html` | Free migration |
| `Policies.dc.html` | Privacy, Terms, Hosting, AUP, GDPR |
| `Contact.dc.html` | Contact |

Client portal:

| File | Screen |
|---|---|
| `Client Area Login.dc.html` | Login |
| `Portal Sidebar.dc.html` | Shared portal sidebar |
| `Client Portal.dc.html` | Dashboard |
| `Order Services.dc.html` | Ordering flow |
| `Invoices.dc.html` | Invoice list + detail |
| `Payments.dc.html` | Payment history |
| `Statement.dc.html` | Account statement |
| `Quotations.dc.html` | Quotations + credit notes |
| `My Hosting.dc.html` | Hosting accounts + detail |
| `My Domains.dc.html` | Domains + manage tabs |
| `Subscriptions.dc.html` | Subscriptions |
| `Support Tickets.dc.html` | Tickets + new ticket |
| `News.dc.html` | Announcements |
| `Profile.dc.html` | Profile + portal users |

`support.js` is the prototype runtime — reference only, do not port.

## Opening the files

Open any `.dc.html` in a browser to see it render. `support.js` must sit alongside them (it is included in this bundle). Pages that use `Site Header` / `Site Footer` / `Portal Sidebar` need those files present too — they are all in the bundle, so keep the folder flat.
