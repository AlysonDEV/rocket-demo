

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
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/scss/style.scss";
        `
      }
    }
  },

  plugins: [
    vue(),
    Components({
      dirs: ['src/components', 'src/layouts'],
      deep: true,
      dts: "./src/components.d.ts"

    }),
    AutoImport({
      imports: ['vue', 'vue-router', {
        axios: [['default', 'axios']]
      }],
      dirs: ['src/composables', 'src/stores'],
      dts: "./src/auto-imports.d.ts",
      vueTemplate: true,
    }),
  ],
})
