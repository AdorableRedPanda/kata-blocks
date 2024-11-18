import { defineConfig } from 'vite';
import { ViteMinifyPlugin } from 'vite-plugin-minify'
export default defineConfig({
  base: '',
  build: {
    outDir: '../dist',
  },
  root: './src/',
  server: {
    open: true,
    port: 8080
  },
  plugins:[ViteMinifyPlugin()]
});
