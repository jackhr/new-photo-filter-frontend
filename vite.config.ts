import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api': 'http://localhost:3001'
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'), // Adjust this path as necessary
        },
    },
})
