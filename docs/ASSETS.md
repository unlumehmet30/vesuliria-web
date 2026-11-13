# Asset sources

All photography is editorial imagery used to establish atmosphere. None depicts a Vesuliria office, product, employee, or completed project.

| Local source | Photographer | Source | License |
| --- | --- | --- | --- |
| `src/assets/concrete-staircase.jpg` | Tsubasa Takifuji | https://unsplash.com/photos/YiYVU9DnG2I | Unsplash License |
| `src/assets/concrete-facade.jpg` | Alinson Torres | https://unsplash.com/photos/TbgDH1C3hpE | Unsplash License |
| `src/assets/mountain-ridges.jpg` | John Gibbons | https://unsplash.com/photos/ZRomekoaJDc | Unsplash License |
| `src/assets/software-workspace.jpg` | Bernd Dittrich | https://unsplash.com/photos/vkH9T8NNNU8 | Unsplash License |

License: https://unsplash.com/license. Astro generates responsive AVIF and WebP variants during the build, retaining a JPEG fallback. Photos receive monochrome styling in CSS. Original downloaded source files are retained for future crops.

## Workshop illustrations

- `src/assets/workshop/research-atlas.webp` is the supplied kit’s `cover_13_hero_research_atlas.webp`, used on Home.
- `src/assets/workshop/flow-diagram.webp` is the supplied kit’s `cover_08_flow_diagram.webp`, used under Experimental research on Capabilities.

Both are credited to the user-provided Independent Workshop Visual Identity Kit and labeled as concept illustrations on the site. The reference boards are kept outside the site.

## Typefaces

Inter Variable and the Manrope Variable wordmark font are bundled locally through Fontsource. Instrument Serif and JetBrains Mono are served locally from the official Google Fonts distributions. Only the Latin subsets used by this English-language site are served. These fonts use the SIL Open Font License; copies are in `public/fonts/licenses/`.

## Brand

The monochrome Vesuliria symbol is an original vector mark created for this website. It consists of a structural V with a detached upper-right element. The editable master is `src/components/Brand.astro`, with its small-size counterpart in `public/favicon.svg`.

`public/social.jpg` is an original typographic social-sharing image.
