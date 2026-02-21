# Moinfo Hosting - Deployment Guide

## Overview

This project has two deployable parts:

| Component | Technology | Destination on Server |
|-----------|-----------|----------------------|
| Landing Page | Next.js (static export) | `public_html/` |
| WHMCS Template | Smarty templates + CSS | `public_html/portal/templates/moinfo/` |

**Production URL:** https://moinfo.co.tz
**Hosting:** cPanel shared hosting (cPanel File Manager)
**Server path:** `/home/moinfote/public_html/`

---

## 1. Deploy Landing Page

The landing page is a Next.js app configured for static export (`output: "export"` in `next.config.ts`). This generates plain HTML/CSS/JS files that work on any web server.

### Build

```bash
npm install
npm run build
```

This creates an `out/` directory containing:
- `index.html` - Homepage
- `404.html` - Error page
- `_next/` - CSS, JS, fonts (hashed filenames for caching)
- `images/` - Logo, TCRA badge
- `robots.txt`

### Package for upload

```bash
cd out
zip -r ../moinfo-landing.zip . -x "*.DS_Store"
```

### Upload via cPanel File Manager

1. Open **cPanel File Manager**
2. Navigate to **`public_html/`**
3. If an existing `index.html` exists, **rename it** to `index.html.bak` first
4. Click **Upload** > select `moinfo-landing.zip`
5. Select the uploaded zip > click **Extract** > extract to `public_html/`
6. Delete `moinfo-landing.zip` after extraction

### Verify

- Visit https://moinfo.co.tz - should show the landing page
- Visit https://moinfo.co.tz/portal/ - WHMCS should still work (unchanged)

### Important notes

- The `_next/` folder contains all JS/CSS with hashed filenames. Each build generates new hashes, so old cached files won't conflict.
- The `images/` folder will be overwritten on each deploy - keep production images in sync with the repo's `public/images/`.
- Never delete the `portal/` directory when deploying the landing page.

---

## 2. Deploy WHMCS Template

The custom `moinfo` template is in `whmcs/portal/templates/moinfo/`. It's based on the WHMCS `twenty-one` template with custom branding, dark mode, and styling.

### Key files

| File | Purpose |
|------|---------|
| `css/custom.css` | All custom styling + dark mode (~3000 lines) |
| `header.tpl` | Header with topbar, nav, theme toggle |
| `footer.tpl` | Footer with branding, links, social |
| `includes/head.tpl` | CSS/JS includes, dark mode flash prevention |
| `js/darkmode.js` | Dark mode toggle logic + localStorage |
| `img/logo.png` | Company logo |

### Package for upload

```bash
cd whmcs/portal/templates
zip -r ../../../moinfo-template.zip moinfo/ -x "*.DS_Store"
```

### Upload via cPanel File Manager

1. Open **cPanel File Manager**
2. Navigate to **`public_html/portal/templates/`**
3. Click **Upload** > select `moinfo-template.zip`
4. Select the uploaded zip > click **Extract** > extract in current directory
5. Delete `moinfo-template.zip` after extraction
6. Verify the `moinfo/` folder appears alongside existing templates (twenty-one, six, etc.)

### Activate the template

1. Go to **WHMCS Admin** > **Configuration** > **System Settings** > **General Settings**
2. On the **General** tab, set **Template** to `moinfo`
3. Click **Save Changes**

### Update only CSS (quick deploy)

If you only changed `custom.css` (most common for dark mode fixes):

1. In cPanel File Manager, navigate to `public_html/portal/templates/moinfo/css/`
2. Select `custom.css` > click **Delete**
3. Click **Upload** > upload the new `custom.css` from `whmcs/portal/templates/moinfo/css/custom.css`

### Dark mode features

- Toggle button in the header navbar (moon/sun icon)
- Persists via `localStorage` key `moinfo-theme`
- Flash prevention script in `<head>` applies class before paint
- CSS custom properties for consistent theming:
  - `--dm-bg: #0c1222` (page background)
  - `--dm-surface: #131b2e` (cards/panels)
  - `--dm-surface-raised: #1a2540` (headers/alternating rows)
  - `--dm-border: #253352`
  - `--dm-text: #e2e8f0`
  - `--dm-text-muted: #94a3b8`
  - `--dm-text-heading: #f1f5f9`

---

## Project Structure

```
moinfo_hosting/
├── src/                    # Next.js landing page source
│   ├── app/                # App Router pages
│   ├── components/         # React components
│   ├── data/               # Static data (pricing, features)
│   ├── hooks/              # Custom React hooks
│   └── theme/              # Mantine theme config
├── public/                 # Static assets (copied to out/)
│   └── images/             # Logo, badges
├── whmcs/                  # WHMCS template (gitignored)
│   └── portal/templates/moinfo/
│       ├── css/custom.css  # Main stylesheet
│       ├── header.tpl      # Header template
│       ├── footer.tpl      # Footer template
│       ├── includes/       # Partials (head, sidebar, etc.)
│       └── js/darkmode.js  # Dark mode toggle
├── next.config.ts          # Static export config
├── package.json
└── DEPLOYMENT.md           # This file
```

---

## Troubleshooting

### Landing page shows old version after deploy
- Hard refresh: `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac)
- The `_next/` files have hashed names so they shouldn't cache, but `index.html` itself might be cached by the browser or server

### WHMCS template not appearing in admin dropdown
- Verify the folder is at exactly `public_html/portal/templates/moinfo/`
- Check that `header.tpl` exists directly inside `moinfo/` (not nested in a subfolder)

### Dark mode flash on page load
- The `includes/head.tpl` has an inline script that adds `dark-mode-preload` class before CSS loads
- The `header.tpl` body tag has a script that adds `dark-mode` class from localStorage
- If flash still occurs, check that `head.tpl` is included before any stylesheets

### CSS changes not showing
- WHMCS may cache compiled templates. In WHMCS Admin go to **Utilities** > **System** > **Cleanup** and clear the template cache
- Also try appending `?v=2` to the CSS URL temporarily for testing
