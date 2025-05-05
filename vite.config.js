import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  theme: {
    extend: {
      colors: {
        // Define colors using rgb or hex instead of oklch
        primary: 'rgb(59, 130, 246)',
      },
    },
  },
})
