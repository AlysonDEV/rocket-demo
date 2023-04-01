

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${import.meta.url}/src/')`,
    },
  },

  plugins: [
    vue(),
    Components({
      globs: ['src/components/*.{vue}', 'src/layouts/*.{vue}']
    }),
    AutoImport({
      imports: ['vue', 'vue-router', {
        axios: [['default', 'axios']]
      }],
      dirs: ['src/composables', 'src/stores']
    }),
  ],
})
