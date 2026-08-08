# Yahya Mdarhri — Portfolio

Personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

All CV content (experience, projects, skills, education, etc.) lives in a single file:

```
src/data/portfolio.ts
```

Edit that file to update text — no need to touch the components.

## Photos

The Hero and Gallery sections currently use stylized gradient placeholders instead of real photos.
To swap in real images:

1. Add your image files to `public/images/`.
2. Update the relevant component (`src/components/Hero.tsx` for the profile photo,
   `src/components/Gallery.tsx` and the `gallery` array in `src/data/portfolio.ts` for the photo grid)
   to render an `next/image` `<Image>` pointing at `/images/your-file.jpg` instead of the gradient block.

## Build

```bash
npm run build
npm run start
```

## Deploy

This project deploys out of the box on [Vercel](https://vercel.com/new).
