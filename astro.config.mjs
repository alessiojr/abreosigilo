import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sigilozero.com.br',
  output: 'static',
  compressHTML: true,
  devToolbar: {
    enabled: false,
  },
});