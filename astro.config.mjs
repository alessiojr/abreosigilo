import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://viaqui.com.br',
  base: '/',
  output: 'static',
  compressHTML: true,
  devToolbar: {
    enabled: false,
  },
});