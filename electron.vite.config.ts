import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'

import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import vueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [
      vueRouter({
        routesFolder: [
          {
            src: 'src/renderer/src/pages'
          }
        ],
        dts: 'src/renderer/src/types/typed-router.d.ts'
      }),
      vue(),
      AutoImport({
        dts: 'src/types/auto-imports.d.ts',
        imports: ['vue', VueRouterAutoImports, 'pinia']
      }),
      Components({
        dts: 'src/types/components.d.ts',
        resolvers: []
      })
    ]
  }
})
