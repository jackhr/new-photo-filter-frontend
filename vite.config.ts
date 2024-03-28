import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: process.env.VITE_HOST || "0.0.0.0",
        proxy: {
            '/api': `http://localhost:${process.env.VITE_API_PORT || 3001}`,
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        },
    },
})
