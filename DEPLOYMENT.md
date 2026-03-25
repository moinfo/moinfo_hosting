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
- Page HTML files: `web-hosting.html`, `email-hosting.html`, `vps.html`, `dedicated-server.html`, `linux-reseller.html`, `website-design.html`, `privacy.html`, `terms.html`, `hosting-policy.html`, `cancellation-policy.html`, `transfer.html`, `gdpr.html`, `acceptable-use.html`

### Package for upload

```bash
cd out
zip -r ../moinfo-hosting-deploy.zip . -x "*.txt" "*.DS_Store"
```

### Upload via cPanel File Manager

1. Open **cPanel File Manager**
2. Navigate to **`public_html/`** (this is the root directory)
3. **Delete old files only** (safe to delete):
   - `_next/` folder
   - `images/` folder
   - `index.html`
   - `404.html`
   - All `*.html` page files (privacy.html, terms.html, etc.)
4. **DO NOT delete** these folders: `portal/`, `moinfo.co.tz/`, `moinfo/`, `.well-known/`, `cgi-bin/`, `allfiles/`, `old_files/`, or any subdomain folders (`*.moinfo.co.tz`)
5. Click **Upload** → select `moinfo-hosting-deploy.zip`
6. Right-click the uploaded zip → **Extract** → extract to current directory (`public_html/`)
7. Delete `moinfo-hosting-deploy.zip` after extraction

### Configure .htaccess

Edit `.htaccess` in `public_html/` and add these rules for clean URLs (keep any existing rules for portal/subdomains):

```apache
# Clean URLs for static Next.js export
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.*)$ $1.html [L]

ErrorDocument 404 /404.html
```

This allows URLs like `/privacy` to serve `privacy.html`, `/vps` to serve `vps.html`, etc.

### Verify

- Visit https://moinfo.co.tz — Homepage
- Visit https://moinfo.co.tz/web-hosting — Web Hosting page
- Visit https://moinfo.co.tz/vps — Linux VPS page
- Visit https://moinfo.co.tz/linux-reseller — Linux Reseller page
- Visit https://moinfo.co.tz/dedicated-server — Dedicated Server page
- Visit https://moinfo.co.tz/website-design — Website Design page
- Visit https://moinfo.co.tz/privacy — Privacy Policy
- Visit https://moinfo.co.tz/terms — Terms of Service
- Visit https://moinfo.co.tz/portal/ — WHMCS (should still work, unchanged)

### Important notes

- The `_next/` folder contains all JS/CSS with hashed filenames. Each build generates new hashes, so old cached files won't conflict.
- The `images/` folder will be overwritten on each deploy — keep production images in sync with the repo's `public/images/`.
- **Never delete the `portal/` directory** when deploying the landing page.
- The `.htaccess` rewrite rules are essential for clean URLs. Without them, you'd need to use `/privacy.html` instead of `/privacy`.

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
├── src/
│   ├── app/                    # App Router pages
│   │   ├── page.tsx            # Homepage
│   │   ├── web-hosting/        # Web Hosting page
│   │   ├── email-hosting/      # Email Hosting page
│   │   ├── vps/                # Linux VPS page
│   │   ├── dedicated-server/   # Dedicated Server page
│   │   ├── linux-reseller/     # Linux Reseller page
│   │   ├── website-design/     # Website Design page
│   │   ├── privacy/            # Privacy Policy
│   │   ├── terms/              # Terms of Service
│   │   ├── hosting-policy/     # Hosting Policy
│   │   ├── cancellation-policy/# Cancellation Policy
│   │   ├── transfer/           # Transfer/Migration
│   │   ├── gdpr/               # GDPR Compliance
│   │   └── acceptable-use/     # Acceptable Use Policy
│   ├── components/             # React components
│   ├── data/                   # Static data (pricing, features)
│   ├── hooks/                  # Custom React hooks
│   ├── i18n/                   # EN/SW translations
│   └── theme/                  # Mantine theme config
├── public/                     # Static assets (copied to out/)
│   └── images/                 # Logo, badges
├── next.config.ts              # Static export config
├── package.json
└── DEPLOYMENT.md               # This file
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
