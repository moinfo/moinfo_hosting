#!/usr/bin/env bash
# moinfo-seo-audit.sh — read-only on-page SEO audit for a static site
# (Next.js export served by nginx: index.html + route folders).
#
# It CHANGES NOTHING. It reads your pages and writes a report + a CSV in the
# current directory. For each page it checks the things that actually move
# rankings and that you can fix yourself:
#   - <title>: present? length 30-60? contains "Tanzania"?
#   - <meta description>: present? length 120-155?
#   - exactly one <h1>? (and shows its text)
#   - canonical link present?
#   - og:image present?
#   - hreflang / Swahili alternate present?  (you currently have none)
#   - visible word count (thin pages < MINWORDS are weak)
#   - images missing alt text
# Site-wide:
#   - robots.txt present and not blocking the whole site
#   - sitemap.xml present
#   - Swahili pages: any /sw/ URLs?  (needed to rank for Swahili queries)
#   - honesty flags in copy: "0+" counters, "Free Domain", "Unlimited Bandwidth"
#
# Usage (pick ONE source):
#   ./moinfo-seo-audit.sh --docroot /var/www/moinfo.co.tz [--site moinfo.co.tz]
#   ./moinfo-seo-audit.sh --sitemap https://moinfo.co.tz/sitemap.xml   # fetches live (needs curl)
# Options: [--min-words N (default 300)] [--out REPORT.txt]

set -u
SELF="$(basename "$0")"; TS="$(date +%Y%m%d-%H%M%S)"
DOCROOT=""; SITEMAP=""; SITE=""; MINWORDS=300; OUT=""
if [ -t 1 ]; then R=$'\e[31m'; Y=$'\e[33m'; G=$'\e[32m'; B=$'\e[1m'; N=$'\e[0m'; else R=; Y=; G=; B=; N=; fi
die(){ printf '%s[%s] error:%s %s\n' "$R" "$SELF" "$N" "$*" >&2; exit 1; }
note(){ printf '%s%s%s\n' "$B" "$*" "$N"; }

while [ $# -gt 0 ]; do case "$1" in
  --docroot) DOCROOT="${2:?}"; shift 2;;
  --sitemap) SITEMAP="${2:?}"; shift 2;;
  --site) SITE="${2:?}"; shift 2;;
  --min-words) MINWORDS="${2:?}"; shift 2;;
  --out) OUT="${2:?}"; shift 2;;
  *) die "unknown option: $1";;
esac; done
[ -n "$DOCROOT" ] || [ -n "$SITEMAP" ] || die "give --docroot DIR or --sitemap URL"
[ -z "$OUT" ] && OUT="moinfo-seo-report-$TS.txt"
CSV="${OUT%.txt}.csv"
: >"$OUT"; printf 'page,title_len,has_tanzania,desc_len,h1_count,canonical,og_image,hreflang,words,imgs_no_alt,issues\n' >"$CSV"
TMPD="$(mktemp -d)"; trap 'rm -rf "$TMPD"' EXIT
ISSUES="$TMPD/issues"; : >"$ISSUES"
addissue(){ printf '%s\t%s\t%s\n' "$1" "$2" "$3" >>"$ISSUES"; }   # severity  page  text

# strip <script>/<style> blocks and tags, collapse whitespace -> visible text
visible_text(){ sed -e 's/<script[^>]*>.*<\/script>//gI' -e 's/<style[^>]*>.*<\/style>//gI' "$1" \
  | tr '\n' ' ' | sed -e 's/<script[^>]*>.*<\/script>//gI' -e 's/<[^>]*>/ /g' -e 's/&[a-zA-Z#0-9]*;/ /g' -e 's/  */ /g'; }

analyze(){ # $1 = file   $2 = label
  local f="$1" label="$2"
  local title desc h1n h1t canon ogimg hfl words noalt tlen dlen tz
  title=$(LC_ALL=C grep -oiP '<title[^>]*>\K.*?(?=</title>)' "$f" 2>/dev/null | head -1 | sed 's/&amp;/\&/g;s/^ *//;s/ *$//')
  tlen=${#title}
  desc=$(LC_ALL=C grep -oiP '<meta[^>]*name=["'\'']description["'\''][^>]*content=["'\'']\K[^"'\'']*' "$f" 2>/dev/null | head -1)
  [ -z "$desc" ] && desc=$(LC_ALL=C grep -oiP '<meta[^>]*content=["'\'']\K[^"'\'']*(?=["'\''][^>]*name=["'\'']description)' "$f" 2>/dev/null | head -1)
  dlen=${#desc}
  h1n=$(LC_ALL=C grep -oiE '<h1[ >]' "$f" 2>/dev/null | wc -l | tr -d ' ')
  h1t=$(LC_ALL=C grep -oiP '<h1[^>]*>\K.*?(?=</h1>)' "$f" 2>/dev/null | head -1 | sed 's/<[^>]*>//g;s/^ *//;s/ *$//' | cut -c1-60)
  LC_ALL=C grep -qiP 'rel=["'\'']?canonical' "$f" 2>/dev/null && canon=yes || canon=NO
  LC_ALL=C grep -qiP 'property=["'\'']?og:image' "$f" 2>/dev/null && ogimg=yes || ogimg=NO
  LC_ALL=C grep -qiP 'hreflang=' "$f" 2>/dev/null && hfl=yes || hfl=NO
  words=$(visible_text "$f" | wc -w | tr -d ' ')
  noalt=$(LC_ALL=C grep -oiE '<img[^>]*>' "$f" 2>/dev/null | grep -ivE 'alt=["'\'']?[^"'\'' >][^"'\'']*' | wc -l | tr -d ' ')
  case "$title" in *[Tt]anzania*) tz=yes;; *) tz=NO;; esac

  # per-page issue rules
  local iss=()
  if [ "$tlen" -eq 0 ]; then addissue HIGH "$label" "no <title>"; iss+=("no-title")
  else [ "$tlen" -lt 30 ] && { addissue MED "$label" "title short ($tlen chars)"; iss+=("title<30"); }
       [ "$tlen" -gt 60 ] && { addissue LOW "$label" "title long ($tlen chars, may truncate)"; iss+=("title>60"); }
  fi
  [ "$tz" = NO ] && { addissue MED "$label" "title has no 'Tanzania'"; iss+=("no-tanzania"); }
  if [ "$dlen" -eq 0 ]; then addissue HIGH "$label" "no meta description"; iss+=("no-desc")
  else [ "$dlen" -lt 120 ] && { addissue LOW "$label" "meta description short ($dlen)"; iss+=("desc<120"); }
       [ "$dlen" -gt 160 ] && { addissue MED "$label" "meta description long ($dlen, truncates ~155)"; iss+=("desc>160"); }
  fi
  [ "$h1n" -eq 0 ] && { addissue HIGH "$label" "no <h1>"; iss+=("no-h1"); }
  [ "$h1n" -gt 1 ] && { addissue MED "$label" "multiple <h1> ($h1n)"; iss+=("h1x$h1n"); }
  [ "$canon" = NO ] && { addissue MED "$label" "no canonical"; iss+=("no-canonical"); }
  [ "$hfl" = NO ] && { addissue LOW "$label" "no hreflang (needed for EN/SW)"; iss+=("no-hreflang"); }
  [ "$words" -lt "$MINWORDS" ] && { addissue MED "$label" "thin content ($words words < $MINWORDS)"; iss+=("thin"); }
  [ "$noalt" -gt 0 ] && { addissue LOW "$label" "$noalt image(s) missing alt"; iss+=("img-no-alt:$noalt"); }

  { printf '\n--- %s\n' "$label"
    printf '    title (%s): %s\n' "$tlen" "${title:-<none>}"
    printf '    "Tanzania" in title: %s\n' "$tz"
    printf '    meta desc (%s): %s\n' "$dlen" "${desc:-<none>}"
    printf '    H1 count: %s   first H1: %s\n' "$h1n" "${h1t:-<none>}"
    printf '    canonical: %s   og:image: %s   hreflang: %s\n' "$canon" "$ogimg" "$hfl"
    printf '    visible words: %s   images missing alt: %s\n' "$words" "$noalt"
    [ ${#iss[@]} -gt 0 ] && printf '    ISSUES: %s\n' "$(IFS=,; echo "${iss[*]}")"
  } >>"$OUT"

  local j; j=$(IFS=,; echo "${iss[*]}")
  printf '"%s",%s,%s,%s,%s,%s,%s,%s,%s,%s,"%s"\n' "$label" "$tlen" "$tz" "$dlen" "$h1n" "$canon" "$ogimg" "$hfl" "$words" "$noalt" "$j" >>"$CSV"
}

# ---- gather pages ----
{ printf 'moinfo-seo-audit\ngenerated : %s\n' "$(date)"
  printf 'source    : %s\n' "${DOCROOT:-$SITEMAP}"
  printf 'mode      : READ-ONLY\n'; } >>"$OUT"

PAGES=0
if [ -n "$DOCROOT" ]; then
  [ -d "$DOCROOT" ] || die "not a directory: $DOCROOT"
  DOCROOT="${DOCROOT%/}"
  while IFS= read -r f; do
    label="${f#"$DOCROOT"}"; [ "$label" = "/index.html" ] && label="/"
    analyze "$f" "$label"; PAGES=$((PAGES+1))
  done < <(find "$DOCROOT" -type f -iname '*.html' 2>/dev/null | grep -vE '/_next/' | sort)
  SROBOTS="$DOCROOT/robots.txt"; SSITEMAP="$DOCROOT/sitemap.xml"
else
  command -v curl >/dev/null || die "curl needed for --sitemap mode"
  note "Fetching sitemap ..."
  curl -sSL --max-time 25 -A "moinfo-seo-audit" "$SITEMAP" -o "$TMPD/sitemap.xml" || die "could not fetch sitemap"
  mapfile -t URLS < <(grep -oiE '<loc>[^<]+' "$TMPD/sitemap.xml" | sed 's/<loc>//I' | sed 's#^\s*##')
  [ "${#URLS[@]}" -gt 0 ] || die "no <loc> URLs in sitemap"
  [ -z "$SITE" ] && SITE=$(printf '%s' "${URLS[0]}" | sed -E 's#https?://##;s#/.*##')
  i=0
  for u in "${URLS[@]}"; do
    i=$((i+1)); tmp="$TMPD/page$i.html"
    curl -sSL --max-time 20 -A "moinfo-seo-audit" "$u" -o "$tmp" 2>/dev/null || { addissue HIGH "$u" "could not fetch"; continue; }
    analyze "$tmp" "$u"; PAGES=$((PAGES+1))
    sleep 0.3
  done
  SROBOTS="$TMPD/robots.txt"; curl -sSL --max-time 15 "https://$SITE/robots.txt" -o "$SROBOTS" 2>/dev/null
  SSITEMAP="$TMPD/sitemap.xml"
fi

# ---- site-wide ----
hdr(){ printf '\n===== %s =====\n' "$1" >>"$OUT"; }
hdr "Site-wide checks"
if [ -f "$SROBOTS" ]; then
  if grep -qiE '^\s*Disallow:\s*/\s*$' "$SROBOTS"; then addissue HIGH "robots.txt" "Disallow: / blocks the whole site"; printf '  robots.txt: BLOCKS whole site (Disallow: /)\n' >>"$OUT"
  elif grep -qiE '^\s*Disallow:\s*/portal' "$SROBOTS"; then addissue MED "robots.txt" "Disallow /portal stops Google seeing the 410 (remove it)"; printf '  robots.txt: disallows /portal (remove so Google can see 410)\n' >>"$OUT"
  else printf '  robots.txt: present, not blocking site (good)\n' >>"$OUT"; fi
else addissue MED "robots.txt" "missing"; printf '  robots.txt: MISSING\n' >>"$OUT"; fi
if [ -f "$SSITEMAP" ] && grep -qi '<urlset\|<loc>' "$SSITEMAP"; then
  nurls=$(grep -ociE '<loc>' "$SSITEMAP"); printf '  sitemap.xml: present (%s URLs)\n' "$nurls" >>"$OUT"
  if grep -qiE '/sw/|hreflang' "$SSITEMAP"; then printf '  Swahili URLs: present\n' >>"$OUT"
  else addissue MED "sitemap" "no Swahili (/sw/) URLs — cannot rank for Swahili queries"; printf '  Swahili URLs: NONE (add /sw/ pages to rank for Swahili searches)\n' >>"$OUT"; fi
else addissue MED "sitemap.xml" "missing/invalid"; printf '  sitemap.xml: MISSING or invalid\n' >>"$OUT"; fi

# honesty flags across pages
hdr "Copy honesty flags (hurt trust & conversions)"
FLAGSRC="$DOCROOT"; [ -z "$DOCROOT" ] && FLAGSRC="$TMPD"
while IFS='|' read -r pat lbl; do
  [ -n "$pat" ] || continue
  hits=$(grep -rilE "$pat" "$FLAGSRC" --include='*.html' 2>/dev/null | grep -vcE '/_next/'); hits=${hits:-0}
  [ "$hits" -gt 0 ] && { printf '  "%s" found in %s page(s)\n' "$lbl" "$hits" >>"$OUT"; addissue MED "copy" "\"$lbl\" appears in $hits page(s) — verify it is true or remove"; }
done <<'PATS'
0\+|0+
Free Domain|Free Domain
Unlimited Bandwidth|Unlimited Bandwidth
PATS

# ---- prioritized summary ----
hdr "Prioritized action list"
for sev in HIGH MED LOW; do
  n=$(grep -c "^$sev    " "$ISSUES" 2>/dev/null || true)
  printf '\n  [%s] %s item(s)\n' "$sev" "$n" >>"$OUT"
  grep "^$sev    " "$ISSUES" 2>/dev/null | awk -F'\t' '{printf "     - %s  (%s)\n",$3,$2}' >>"$OUT"
done
{ printf '\n===== summary =====\n'
  printf 'pages audited: %s\n' "$PAGES"
  printf 'issues: HIGH=%s  MED=%s  LOW=%s\n' \
    "$(grep -c '^HIGH    ' "$ISSUES" 2>/dev/null||true)" \
    "$(grep -c '^MED    '  "$ISSUES" 2>/dev/null||true)" \
    "$(grep -c '^LOW    '  "$ISSUES" 2>/dev/null||true)"
  printf '\nFix HIGH first (missing title/description/H1), then MED (Tanzania in title,\n'
  printf 'meta length, thin content, Swahili pages). Per-page data is in %s\n' "$CSV"
} >>"$OUT"

note "Done. Report: $OUT   CSV: $CSV"
printf '%sPages: %s  |  HIGH=%s MED=%s LOW=%s%s\n' "$Y" "$PAGES" \
  "$(grep -c '^HIGH    ' "$ISSUES" 2>/dev/null||true)" \
  "$(grep -c '^MED    ' "$ISSUES" 2>/dev/null||true)" \
  "$(grep -c '^LOW    ' "$ISSUES" 2>/dev/null||true)" "$N"
