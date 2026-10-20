import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://alessiojr.github.io',
  base: '/abreosigilo',
  output: 'static',
  compressHTML: true,
  devToolbar: {
    enabled: false,
  },
});