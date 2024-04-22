import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://samnicklez.github.io/retro-portfolio/',
  publicPath: '/retro-portfolio/',
  baseUrl: '/retro-portfolio/',
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('a2k-')
        }
      }
    })
  ],
  optimizeDeps: {
    exclude: ['@a2000/icons']
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
