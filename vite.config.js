import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/demo/portfolio/',
  build: {
    outDir: 'dist/demo/portfolio',
    emptyOutDir: true
  }
})
