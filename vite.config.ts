import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 9000,
    // proxy: {
    //   '/api': {
    //     target: `${env.PROXY}`,
    //     secure: false,
    //     ws: true,
    //     changeOrigin: true,
    //   },
    // },
  },
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve('./src'),
      },
    ],
    extensions: ['*', '.vue', '.js', '.ts', '.json', '.css', '.scss'],
  },
})
