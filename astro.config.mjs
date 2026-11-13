import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'https://vesuliria.com',
  output: 'static',
  integrations: [sitemap({ filter: page => !['/about/', '/approach/', '/research/'].some(path => page.endsWith(path)) })],
  vite: { plugins: [tailwindcss()] },
});
