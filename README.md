# yahyamdarhri.com

Personal portfolio — "The page is a pipeline". Static site (HTML / CSS / vanilla JS), no build step, EN / FR / AR (RTL).

```
index.html            page (English content lives here)
assets/css/styles.css design tokens + layout
assets/js/i18n.js     French and Arabic strings
assets/js/main.js     language switch, stage cycler, data packet, oud string, reveal
assets/img/           optimized WebP images
assets/cv/            downloadable CV
materials/            source files (mockup, originals) — excluded from deploy by .vercelignore
```

## Run locally

```
python -m http.server 5173
```

Open http://127.0.0.1:5173 (add `?lang=fr` or `?lang=ar` to force a language).

## Deploy on Vercel

1. vercel.com → Add New → Project → import this GitHub repo.
2. Framework preset: **Other**. Leave build command and output directory empty.
3. Deploy. Every push to `main` redeploys.
4. Optional: Settings → Domains → add `yahyamdarhri.com`.

## Editing content

- English: edit the text directly in `index.html`.
- French / Arabic: edit the matching key (`data-i18n="…"`) in `assets/js/i18n.js`.
- New CV: replace `assets/cv/Yahya-Mdarhri-CV-FR.pdf` (keep the name, or update the 3 links in `index.html`).
