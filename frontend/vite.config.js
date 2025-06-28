import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import * as path from "node:path";

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  server: {
    host: true,
    port: 8080
  },
  alias: {
    '@': path.resolve(__dirname, './src')
  }
})
