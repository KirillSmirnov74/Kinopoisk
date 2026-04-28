import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'
import checker from 'vite-plugin-checker'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
    checker({
      typescript: true
    })

    ],
  server: {
    watch: {
      usePolling: true, 
      interval: 100,
    },
    hmr: {
      overlay: true,
    }
  }
})