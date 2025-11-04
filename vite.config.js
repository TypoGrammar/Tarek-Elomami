import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Tarek-Elomami/', // 👈 must match your repo name exactly
  build: {
    outDir: 'dist',
  },
})
