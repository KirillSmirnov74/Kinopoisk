import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // ⬇️ Эти строки решают проблему "залипания" обновлений
    watch: {
      usePolling: true, 
      interval: 100,
    },
    hmr: {
      overlay: true,
      // Иногда помогает указать порт явно, если есть конфликты
      // port: 5173 
    }
  }
})