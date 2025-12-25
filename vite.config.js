import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Use Rolldown (Rust-based bundler) for faster builds - remove if issues occur
  builder: 'rolldown',
  // Base path for GitHub Pages deployment
  base: '/wee-care-react/',
})
