import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import { astroImageTools } from 'astro-imagetools';

import cloudflare from '@astrojs/cloudflare';
import sectionize from '@hbsnow/rehype-sectionize';

// https://astro.build/config
export default defineConfig({
  // base: '.', // Set a path prefix.
  site: 'https://saidk.io',
  // Use to generate your sitemap and canonical URLs in your final build.
  trailingSlash: 'ignore',
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'catppuccin-mocha',
    },
    rehypePlugins: [sectionize],
  },
  integrations: [
    react(),
    tailwind({}),
    sitemap(),
    robotsTxt(),
    astroImageTools,
  ],
  output: 'hybrid',
  adapter: cloudflare({}),
});
