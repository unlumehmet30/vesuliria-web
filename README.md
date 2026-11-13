# Vesuliria

The official, static website for Vesuliria: an independent technology and engineering company.

## Develop

Requires Node.js 22.22 or newer.

```sh
npm ci
npm run dev
```

## Verify and build

```sh
npm run check
npm run build
npm run preview
```

The production website is generated in `dist/`. No database, API credentials, backend, authentication, CMS, or paid service is required. Fonts and images are served locally.

## Pages

English pages live at the root and Turkish pages under `/tr/` (`/tr/`, `/tr/company`, `/tr/work/<slug>`, …). Every page links its counterpart with `hreflang` and a language switch in the header.

- `/` — Home
- `/company` — Company
- `/capabilities` — Capabilities, with native expandable details
- `/work` — Work and products
- `/work/<slug>` — Product page: overview, highlights, results, demo videos, screens, then a link to the product's own site
- `/avt/` — Vesuliria AVT sales page in Turkish, `/avt/en/` in English (`src/views/Avt.astro`, teal accent)
- `/contact` — Contact
- `/404.html` — Not found

Old `/about`, `/approach`, and `/research` links are retained as static redirects. The sitemap includes only the primary routes.

## Content and configuration

- `src/i18n.ts`: languages, shared interface strings and the `localize()` / `alternatePath()` path helpers.
- `src/data/site.ts`: company description, official email, navigation and capability copy, each in English and Turkish. Leave `email` empty until a real mailbox is ready. Setting it renders functional email links on Contact and in the footer.
- `src/data/projects.ts`: confirmed project data. Add only work whose relationship to Vesuliria, status, imagery and public links are approved. Each entry drives its card on Home and Work and its page under `/work/<slug>`; copy, captions and video titles are written in both languages. Images live in `src/assets/products/`.
  - Demo videos: add to the project's `videos` list, either `{ title: { en, tr }, embed: 'https://www.youtube-nocookie.com/embed/<id>' }` or `{ title: { en, tr }, file: '/videos/<name>.mp4' }` with the file in `public/videos/`. The Demo section appears only when the list is not empty.
- `src/views/`: page compositions with their English and Turkish copy. `src/pages/` holds thin route wrappers that pick the language.
- `src/styles/global.css`: palette, font, spacing, motion and responsive tokens; Tailwind is integrated through its Vite plugin.
- `src/components/`: brand, header, footer, image, link and project components.
- `docs/ASSETS.md`: photo sources and font licenses.

There are no fabricated customers, employees, statistics, or contact details. Product screenshots are taken from the running products; AVT's come from a synthetic demo dataset. The source mockup guides the art direction and is not embedded in the website.

## Deploy

The GitHub Pages workflow builds and publishes `dist/` to `https://vesuliria.com` on pushes to `main`. Sketchmindai is a separate site at `https://sketchmindai.com` (repository `sketchmind-site`) built on the same visual skeleton.

For manual deployment, run `npm run build` and publish `dist/`. Build using Node 22.22+ and use static hosting without a server adapter. GitHub Pages is supported at a custom domain or root user/organization site. A repository subpath requires a configured Astro `base` and corresponding asset/link prefixes before publishing.

The current canonical domain is `https://vesuliria.com`. Before launch, confirm it in `src/data/site.ts`, `astro.config.mjs`, and `public/robots.txt`. The sitemap and Open Graph metadata are generated from those settings. Configure a real email address if the site should accept direct enquiries.

Responsive layouts target 375, 430, 768, 1024, 1440 and 1920 pixels. The menu supports keyboard navigation and Escape; reduced-motion preferences disable transitions and smooth scrolling. All content remains visible and capability details remain usable without JavaScript.
