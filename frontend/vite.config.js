import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    server: {
        proxy: {
            "/api": "http://65.1.108.64:3000"
        }
    },
  
    plugins: [react()],
})
