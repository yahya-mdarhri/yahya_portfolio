# Yahya Mdarhri — Portfolio (multi-page)

Static 6-page site. No build step. Open `index.html`, or deploy the whole
`portfolio-site/` folder to GitHub Pages / Netlify / Vercel.

## Pages
- `index.html`   — Home (professional): hero + photo, dark stats band, Professional Background, offer teaser
- `career.html`  — Career path: experience timeline, education, certs, volunteering, languages
- `projects.html`— Selected projects: strategic steering platform, Arabic NER (HF link), more projects, publication
- `music.html`   — Music: the oud, a video of you playing, the song-to-notation SaaS
- `offer.html`   — Roles, services, **executive training**, ways to work
- `contact.html` — Friendly contact page

## Design — now 50 / 50 warm ⇄ tech
Warm side: ivory paper, emerald `#10715A`, saffron `#CE9126`, human photos.
Tech side: geometric **Space Grotesk** display, cool slate bands (`#131B24`), an
electric-teal accent (`#38C9A7`), grid textures, mono labels, and a dark technical footer.
The homepage is kept strictly professional; the oud lives only on the Music page.

## Already done ✅
- Both photos wired in (`assets/photo-portrait.jpg`, `assets/photo-action.jpg`)
- English CV as a download (`assets/CV_Yahya_Mdarhri_EN.pdf`)
- Hugging Face links point to your profile + the NER model
- Publication added on the Projects page (DOI + Scopus links)

## ⬜ Still to add (only these)
1. **LinkedIn + GitHub** — search & replace `{{LINKEDIN_URL}}` and `{{GITHUB_URL}}` across all `.html`.
2. **French CV** — drop `assets/CV_Yahya_Mdarhri_FR.pdf` (English already works).
3. **Oud video** — in `music.html`, replace the placeholder box with a `<video>` or YouTube embed.
4. **SaaS links** — `{{SAAS_LIVE_URL}}` and `{{SAAS_REPO_OR_DEMO_URL}}` on the Music page.

## Deploy (GitHub Pages)
Upload the folder contents to a repo → Settings → Pages → deploy from `main` (root).
Live at `https://<username>.github.io/<repo>/`.

Responsive, keyboard-accessible, respects reduced motion.
