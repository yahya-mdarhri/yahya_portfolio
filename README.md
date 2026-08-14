# Yahya Mdarhri — Portfolio

Static 6-page site. No build step, no dependencies. Open `index.html` locally, or deploy
the folder as-is to GitHub Pages / Netlify / Vercel.

## Pages

| Page | Purpose |
|---|---|
| `index.html` | Hero, professional background, **vision teaser**, offer teaser |
| `career.html` | Experience timeline, NER model, **publication**, education, **PMP certificate**, volunteering, languages |
| `vision.html` | **Where I'm headed**: the problem, three horizons, what I'm looking for |
| `offer.html` | Roles, services, executive training, ways to work |
| `music.html` | The oud, and the song-to-notation project |
| `contact.html` | Contact details |

There used to be a separate `projects.html` with two long-form case studies. It's been
removed; the NER model summary and the Scopus publication now live on `career.html` instead.

## Before you deploy — 3 blockers

1. **Set the domain.** Every `canonical`, `og:url` and `og:image` currently assumes
   `https://yahyamdarhri.com`. If you deploy anywhere else, search-and-replace that string
   across `*.html`, `sitemap.xml` and `robots.txt`. Wrong canonicals actively hurt SEO,
   don't skip this.
2. **GitHub URL.** `{{GITHUB_URL}}` is still a literal placeholder in all 6 footers.
   Search-and-replace it. (For a data scientist, a missing GitHub link is conspicuous.)
3. **French CV.** The CV dropdown links `CV_Yahya_Mdarhri_FR.pdf`, which isn't in the folder
   yet, so that download 404s until you drop the file in. English already works.

## Content worth adding

1. **Evaluation metrics for the NER model.** The Hugging Face model card has no F1,
   precision, or recall. For an ML hiring manager this is the first thing they look for,
   and it's worth adding to the model card itself, not just this site.
2. **Training data**, one sentence, for the NER model.
3. **A proper headshot.** See the note below.

## Photos

`_originals/` holds the untouched files; the ones in the root are optimised (42% smaller).
Re-run `python optimize-images.py` after adding or replacing any photo — it always reads
from `_originals/`, so it's safe to run repeatedly, and it also regenerates `og-image.jpg`
and `apple-touch-icon.png`.

| File | Used on | Note |
|---|---|---|
| `1.jpeg` | homepage hero, contact avatar | Night street shot — the only portrait-shaped photo of you |
| `2.jpeg` | *(og-image only)* | **Your best photo** — clear face, professional context |
| `3.jpeg` | career page | Working session, good |
| `4.jpeg` | offer page | You presenting to a class — matches the training content |
| `5.jpeg` | unused | Stadium; personal rather than professional |
| `6.jpeg` | music page | A photo *of an oud*, not of you — **check you have the right to use it**, it looks like a stock/museum image |
| `7.jpeg` | unused | Group photo of ~25 people; was wrongly cropped into a portrait frame on the offer page |

**The real gap: there is no professional headshot in this set.** Everything here is a
snapshot. One hour with a photographer — plain background, good light, three or four
usable frames — would lift the homepage, the OG card and your LinkedIn all at once. It's
the cheapest quality upgrade left.

## PMP certificate

`pmp-certificate.jpg` is rendered from `PMI Certification.pdf` and shown on `career.html`
(the "Education & certification" section, `#pmp`), linking out to the [PMI registry](https://www.pmi.org/certifications/certification-resources/registry)
for independent verification against certification number 4407525. The homepage's
"PMP® Certified" pill links straight to it.

On renewal (expires 9 June 2029), replace `PMI Certification.pdf` and run:

```bash
python render-certificate.py
```

It regenerates `pmp-certificate.jpg` at the same size — no HTML changes needed unless the
new certificate's aspect ratio differs, in which case update the `width`/`height` attributes
on the `<img>` in `career.html`.

## Deploy (GitHub Pages)

```bash
git init && git add . && git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

Then Settings → Pages → deploy from `main` (root). Live at
`https://<username>.github.io/<repo>/` — and remember blocker #1 above about canonicals.

## Design system

Warm side: ivory paper, emerald `#10715A`, saffron `#CE9126`.
Tech side: Space Grotesk display type, slate bands `#131B24`, electric teal `#38C9A7`,
grid textures, mono labels, dark footer.
Responsive, keyboard-accessible, honours `prefers-reduced-motion`.

`_originals/` is gitignored — it's a local safety net, not something to publish.
