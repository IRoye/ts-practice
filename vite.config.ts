/*
 * @Description: ,
 * @Author: yuyi
 * @Date: 2024-06-16 14:24:42
 * @LastEditors: yuyi
 * @LastEditTime: 2024-06-16 20:39:46
 */
import { fileURLToPath, URL } from 'node:url'
import checker from 'vite-plugin-checker'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true // 监听所有地址
  },
  plugins: [
    vue(),
    vueJsx(),
    checker({
      // e.g. use TypeScript check
      typescript: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
