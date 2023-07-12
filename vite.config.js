import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from 'path'
import { fileURLToPath, URL } from 'node:url'
import { resolve, dirname } from 'node:path'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
