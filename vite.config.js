import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',

  },
  server: {
    port: 5174, // Set Vite to run on port 5174
    open: true, // Auto-open browser when server starts (optional)
  },
})
