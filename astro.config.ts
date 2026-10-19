import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://enfieldzim.co.zw',
  output: 'static',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
