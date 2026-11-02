# Vesuliria Website

The official multi-page site for Vesuliria, an independent technology company.

## Stack
- Astro 5
- TypeScript (Astro project)
- Responsive custom CSS; no heavyweight UI or animation dependencies
- Deterministic SVG graphics for the visual identity (no architectural stock photography)
- Sitewide dark/light theme with accessible toggle and persisted preference

## Run locally
```sh
npm install
npm run dev
npm run build
```

## Pages
Home / About / Work / Research / Approach / Contact

## Deployment
Cloudflare Pages:
- Build command: `npm run build`
- Output directory: `dist`
- Framework preset: Astro

## Notes before publishing
- Copy does not claim invented customers, projects, teams or performance statistics.
- Connect a real company contact email when ready.
- Update the production domain in `astro.config.mjs` if different from `vesuliria.com`.
- Abstract graphics are generated from version-controlled SVG paths and dots in `src/components/FlowField.astro`, rather than external images.
- Test desktop/mobile, keyboard navigation, and reduced-motion settings.
