import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

import cloudflare from '@astrojs/cloudflare';
import sectionize from '@hbsnow/rehype-sectionize';

import tailwindcss from '@tailwindcss/vite';

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

  integrations: [react(), sitemap(), robotsTxt()],
  output: 'static',

  adapter: cloudflare({
    platformProxy: {
      enabled: true,
      configPath: './wrangler.jsonc',
    },
  }),

  vite: {
    plugins: [tailwindcss()],
  },
});
