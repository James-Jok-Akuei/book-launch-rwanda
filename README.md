# Africa World Books — Book Launch Website

A static, editorial website for the Africa World Books launch of
**_The Unsung Heroes of the South Sudanese Struggle for Freedom_** —
Hotel Chez Lando, Kigali · 27 June 2026.

Built to read like the website of an independent literary press: warm paper &
ink, a serif-driven type system, and a single earthy terracotta accent.

## Stack
- **Vite + React 18** (SPA) with **React Router** for the `/authors/:id` and
  `/program` routes.
- No backend, no database. `npm run build` emits a fully static bundle in `dist/`
  for GitHub Pages, Netlify, or Vercel.

## Commands
```bash
npm install      # install dependencies
npm run dev      # local dev server (http://localhost:5173)
npm run build    # static production build -> dist/
npm run preview  # preview the production build locally
```

## Editing content
**All site content lives in [`src/content.js`](src/content.js).** Editing that one
file is all it takes to update the event details, books, authors, program,
guests, cultural groups, videos, partners, and contact info. Components never
hard-code copy.

Items marked `PLACEHOLDER` still need real assets/links:
- some book covers and blurbs,
- the YouTube video IDs.

Author portraits and the centerpiece cover gracefully fall back to a typographic
placeholder until the real image is added — so the site always looks finished.

## Adding images
Drop files into [`public/`](public/) and reference them with a leading slash in
`src/content.js`:

| Content field            | Put the file at            | Referenced as                       |
| ------------------------ | -------------------------- | ----------------------------------- |
| `site.logo`              | `public/awb-logo.png`      | `/awb-logo.png`                     |
| `books[].cover`          | `public/covers/<file>.jpg` | `/covers/<file>.jpg`                |
| `authors[].photo`        | `public/authors/<file>.jpg`| `/authors/<file>.jpg`               |

## Deploying
- **Netlify:** drag-and-drop `dist/`, or connect the repo (build `npm run build`,
  publish `dist`). SPA routing handled by `public/_redirects`.
- **Vercel:** import the repo; routing handled by `vercel.json`.
- **GitHub Pages:** serve `dist/`; deep-link routing handled by `public/404.html`.

## Hosting note
The poster lists **10:00 AM**, while the detailed program runs **1:00 PM–6:35 PM**.
Confirm whether 10:00 AM is arrival/registration and 1:00 PM the formal program,
then update `site.event.time` in `src/content.js`.
