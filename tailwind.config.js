/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                'pulse-max-opacity-50': {
                    '0%, 100%': { opacity: 0.5 },
                    '50%': { opacity: 0.25 },
                },
            },
            animation: {
                'spin-slow': 'spin 20s linear infinite',
                'pulse-max-opacity-50': 'pulse-max-opacity-50 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
        },
    },
    plugins: [],
}

