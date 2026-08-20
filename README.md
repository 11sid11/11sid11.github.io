# sid.is-a.dev

Personal portfolio for Siddharth Sahoo — developer and visual creator.

## Stack

- Astro
- Static output on GitHub Pages
- Vanilla CSS and JavaScript
- Lightweight, dependency-free WebGL on the landing page

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Content model

Developer work lives in `src/data/projects.ts` and creative work in `src/data/creative.ts`.
Add a new entry to the relevant typed array, add media under `public/work/`, and Astro will generate the corresponding portfolio route.

`visibility: 'showcase'` is for projects that can be discussed publicly without linking to source code. Private work should not be added to the data files.

## Deployment

`.github/workflows/pages.yml` builds the static site and deploys `dist/` to GitHub Pages on pushes to `main`.
The custom domain is preserved via `public/CNAME` and the repository-level `CNAME` used by the existing is-a.dev registration.
