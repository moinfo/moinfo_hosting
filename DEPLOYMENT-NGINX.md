# Moinfo Hosting — Mwongozo wa Ku-deploy (Ubuntu + Nginx)

Mwongozo huu unaeleza jinsi ya kuweka tovuti ya `moinfo.co.tz` kwenye Ubuntu server inayotumia **nginx**.

> Mwongozo wa cPanel uko kwenye `DEPLOYMENT.md`. Huu ni mbadala wake kwa server ya VPS.

## Muhtasari

Mradi ni Next.js yenye `output: "export"` (angalia `next.config.ts`). Maana yake:

- `npm run build` huzalisha folda `out/` yenye HTML/CSS/JS tupu.
- **Hakuna Node.js wala PM2 kwenye server.** Nginx inahudumia faili hizo moja kwa moja.
- Node inahitajika **kwenye kompyuta ya kujenga (build) tu**, si kwenye server.

```
Kompyuta yako ──(npm run build)──▶ out/ ──(rsync)──▶ /var/www/moinfo.co.tz/ ◀── nginx ◀── mgeni
```

| Kitu | Thamani |
|------|---------|
| Domain | `moinfo.co.tz`, `www.moinfo.co.tz` |
| Web root kwenye server | `/var/www/moinfo.co.tz` |
| Config ya nginx | `/etc/nginx/sites-available/moinfo.co.tz` |
| Billing | Iko nje (`https://mobilling.co.tz`), haihusiani na server hii |

---

## 1. Maandalizi ya Server (mara moja tu)

Ingia kwenye server kwa SSH, kisha:

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y nginx rsync

# Firewall
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'     # port 80 na 443
sudo ufw enable
sudo ufw status
```

Tengeneza user wa ku-deploy (usitumie `root`) na folda ya tovuti:

```bash
sudo adduser deploy
sudo mkdir -p /var/www/moinfo.co.tz
sudo chown -R deploy:deploy /var/www/moinfo.co.tz
```

Weka SSH key yako ili `rsync` isiulize password (endesha hii kwenye **kompyuta yako**):

```bash
ssh-copy-id deploy@IP_YA_SERVER
```

## 2. DNS

Kwenye DNS ya domain (registrar au Cloudflare), ongeza:

| Type | Name | Value |
|------|------|-------|
| A | `@` | `IP_YA_SERVER` |
| A | `www` | `IP_YA_SERVER` |

Thibitisha kabla ya kuendelea (inaweza kuchukua dakika chache hadi saa):

```bash
dig +short moinfo.co.tz
```

## 3. Config ya Nginx

Tengeneza faili:

```bash
sudo nano /etc/nginx/sites-available/moinfo.co.tz
```

Weka yaliyomo haya (hatua ya HTTP tu kwanza; certbot ataongeza HTTPS):

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name moinfo.co.tz www.moinfo.co.tz;

    root /var/www/moinfo.co.tz;
    index index.html;

    # --- Compression ---
    gzip on;
    gzip_vary on;
    gzip_comp_level 6;
    gzip_min_length 1024;
    gzip_types text/plain text/css application/javascript application/json
               image/svg+xml application/xml font/ttf;

    # --- Security headers ---
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # --- Clean URLs: /privacy -> privacy.html ---
    location / {
        try_files $uri $uri.html $uri/ =404;
    }

    # --- Faili za _next zina hash kwenye jina: cache kwa mwaka mmoja ---
    location /_next/static/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # --- Picha na fonts ---
    location ~* \.(?:png|jpg|jpeg|gif|webp|avif|svg|ico|woff2?)$ {
        expires 30d;
        add_header Cache-Control "public";
        access_log off;
    }

    # --- HTML isi-cache kwa nguvu, ili deploy mpya ionekane mara moja ---
    location ~* \.html$ {
        add_header Cache-Control "no-cache";
    }

    error_page 404 /404.html;
    location = /404.html {
        internal;
    }

    # Zuia faili zilizofichwa (.git, .env), ila .well-known ya SSL iruhusiwe
    location ~ /\.(?!well-known) {
        deny all;
    }
}
```

> **Kwa nini `try_files $uri $uri.html $uri/ =404`?**
> Ni kazi ile ile ambayo `.htaccess` ilifanya kwenye cPanel. Ombi la `/privacy`
> linatafuta faili `privacy`, kisha `privacy.html`, kisha folda. Bila hii, ungelazimika kutumia `/privacy.html`.
>
> Faili za `.txt` (RSC payloads) zina-serve kawaida na hazihitaji kanuni maalum.

Washa site, jaribu config, na reload:

```bash
sudo ln -s /etc/nginx/sites-available/moinfo.co.tz /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default     # ondoa ukurasa wa kawaida wa nginx
sudo nginx -t                                   # lazima useme "syntax is ok"
sudo systemctl reload nginx
```

## 4. HTTPS (Let's Encrypt)

Endesha hatua hii **baada ya** DNS kuelekeza kwenye server.

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d moinfo.co.tz -d www.moinfo.co.tz
```

Chagua chaguo la **redirect HTTP → HTTPS** ukiulizwa. Certbot atahariri config yako kuongeza `listen 443 ssl` na vyeti.

Thibitisha upyaishaji wa kiotomatiki (vyeti vinaisha kila siku 90):

```bash
sudo certbot renew --dry-run
systemctl list-timers | grep certbot
```

### Elekeza `www` kwenda domain kuu (hiari, inapendekezwa)

Ili URL moja tu iwe ya kweli (SEO), ongeza block hii juu ya ile kuu kwenye config baada ya certbot kumaliza:

```nginx
server {
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name www.moinfo.co.tz;
    # mistari ya ssl_certificate ambayo certbot aliiweka kwa block kuu
    return 301 https://moinfo.co.tz$request_uri;
}
```

## 5. Ku-deploy Tovuti

Hatua hizi hufanyika **kwenye kompyuta yako**, ndani ya folda ya mradi.

### 5.1 Jenga

```bash
npm ci
npm run build
```

### 5.2 Kagua env KABLA ya kupakia

Thamani za `NEXT_PUBLIC_*` huchomwa ndani ya faili za static wakati wa build. Domain search
inaita MoBilling API; ukiacha `NEXT_PUBLIC_MOBILLING_API=http://localhost:8000/api` kwenye `.env.local`,
tovuti ya production itaita kompyuta ya kila mgeni.

```bash
grep -r "localhost:8000" out/ && echo "USI-DEPLOY" || echo "safi"
```

Bila override, API huchukua `https://mobilling.co.tz/api` (sahihi). Tumia `.env.development.local` kwa majaribio ya local.

### 5.3 Pakia kwa rsync

```bash
rsync -avz --delete out/ deploy@IP_YA_SERVER:/var/www/moinfo.co.tz/
```

- `--delete` huondoa faili za zamani zisizo kwenye build mpya (mfano `_next/` ya zamani).
- **Slash ya mwisho kwenye `out/` ni muhimu**: inapakia *yaliyomo*, si folda yenyewe.
- Nginx haihitaji reload; faili mpya zinaonekana mara moja.

> Kuwa makini: `--delete` inafuta kila kitu kwenye `/var/www/moinfo.co.tz/` ambacho hakipo kwenye `out/`.
> Usiweke faili nyingine (mfano `.well-known`) ndani ya folda hiyo. Certbot hutumia `/var/www/html` au nginx plugin, kwa hiyo kawaida haiguswi.

### 5.4 Script ya kila siku (hiari)

Tengeneza `deploy-nginx.sh` kwenye root ya mradi:

```bash
#!/usr/bin/env bash
set -euo pipefail

SERVER="deploy@IP_YA_SERVER"
TARGET="/var/www/moinfo.co.tz/"

npm ci
npm run build

if grep -rq "localhost:8000" out/; then
  echo "KOSA: out/ ina localhost:8000. Angalia .env.local" >&2
  exit 1
fi

rsync -avz --delete out/ "$SERVER:$TARGET"
echo "Imekamilika: https://moinfo.co.tz"
```

```bash
chmod +x deploy-nginx.sh
./deploy-nginx.sh
```

### Mbadala: bila rsync (zip + scp)

```bash
cd out && zip -r ../moinfo-hosting-deploy.zip . -x "*.DS_Store" && cd ..
scp moinfo-hosting-deploy.zip deploy@IP_YA_SERVER:/tmp/

# kwenye server:
rm -rf /var/www/moinfo.co.tz/*
unzip -o /tmp/moinfo-hosting-deploy.zip -d /var/www/moinfo.co.tz/
rm /tmp/moinfo-hosting-deploy.zip
```

> Usiondoe `*.txt` kwenye zip: `robots.txt` na RSC payloads (zinazotumika kwenye navigation) zinahitajika.

## 6. Kuthibitisha

```bash
curl -I https://moinfo.co.tz                  # 200
curl -I https://moinfo.co.tz/web-hosting      # 200 (clean URL inafanya kazi)
curl -I https://moinfo.co.tz/haipo            # 404
curl -I http://moinfo.co.tz                   # 301 -> https
curl -I https://moinfo.co.tz/_next/static/    # angalia header ya Cache-Control kwenye faili halisi
```

Fungua kwenye browser: `/`, `/web-hosting`, `/vps`, `/email-hosting`, `/dedicated-server`,
`/linux-reseller`, `/website-design`, `/privacy`, `/terms`. Kisha jaribu domain search na kitufe cha
"Order Now" kuhakikisha vinafika MoBilling.

## 7. Rollback ya Haraka

Kabla ya kila deploy, hifadhi nakala ya toleo linalofanya kazi (kwenye server):

```bash
sudo rsync -a /var/www/moinfo.co.tz/ /var/backups/moinfo-$(date +%F-%H%M)/
```

Kurudisha nyuma:

```bash
sudo rsync -a --delete /var/backups/moinfo-YYYY-MM-DD-HHMM/ /var/www/moinfo.co.tz/
```

Njia rahisi zaidi: rudi kwenye commit nzuri ya git, endesha `./deploy-nginx.sh` tena.

---

## Utatuzi wa Matatizo

| Tatizo | Sababu na suluhisho |
|--------|---------------------|
| **403 Forbidden** | Ruhusa za faili. `sudo chmod -R o+rX /var/www/moinfo.co.tz` (nginx inahitaji kusoma). Hakikisha pia kila folda ya njia ina `x`. |
| **404 kwenye `/privacy` lakini `/privacy.html` inafanya kazi** | `try_files` haipo au si sahihi kwenye `location /`. Angalia sehemu ya 3. |
| **Ukurasa wa kawaida wa "Welcome to nginx"** | `default` site bado imewashwa. `sudo rm /etc/nginx/sites-enabled/default` kisha reload. |
| **Tovuti inaonyesha toleo la zamani** | `index.html` imehifadhiwa na browser. Hard refresh (`Cmd+Shift+R`). Hakikisha `Cache-Control: no-cache` ipo kwa `.html`. Ukitumia Cloudflare, fanya Purge Cache. |
| **Domain search haifanyi kazi** | Fungua DevTools → Network. Ikiita `localhost:8000`, build ilifanywa na `.env.local` isiyo sahihi: jenga upya (5.2). Ikiwa ni CORS, ruhusu `https://moinfo.co.tz` kwenye MoBilling API. |
| **`nginx -t` inashindwa** | Soma ujumbe wa kosa, unataja faili na namba ya mstari. Kosa la kawaida ni `;` iliyosahaulika. |
| **Certbot inashindwa** | DNS haijaelekeza bado, au port 80 imefungwa. Angalia `dig +short moinfo.co.tz` na `sudo ufw status`. |
| **Cheti kimeisha** | `sudo certbot renew` kisha `sudo systemctl reload nginx`. |

### Logs

```bash
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log
sudo systemctl status nginx
```

---

## Orodha ya Haraka

**Mara ya kwanza:** `apt install nginx` → user `deploy` → DNS → config ya nginx → `nginx -t` → certbot.

**Kila deploy:** `npm ci` → `npm run build` → kagua `localhost:8000` → `rsync -avz --delete out/ deploy@SERVER:/var/www/moinfo.co.tz/`.
