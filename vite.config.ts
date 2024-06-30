/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'

export default defineConfig({
  define : {
    'import.meta.vitest': false,
  },
  plugins: [
    vue()
  ],
  test: {
    globals: true,
    environment: 'happy-dom',
    includeSource: ['src/**/*.{js,ts}'], 
  },
  resolve: {
    // @をエイリアスとして設定している
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
