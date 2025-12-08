import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Bronze palette inspired by Le Cronache di Beygat book cover
                bronze: {
                    50: '#fdf6e9',
                    100: '#f8e8c8',
                    200: '#e6c99a',
                    300: '#d4a76a',
                    400: '#c9a05f',
                    500: '#b87333',
                    600: '#a56628',
                    700: '#8b5221',
                    800: '#6b3d1a',
                    900: '#1a1512',
                    950: '#0d0a08',
                },
                omnis: {
                    cherry: '#a54b2e',
                    lavender: '#8b6b9c',
                    lemon: '#d4a76a',
                    bronze: '#cd7f32',
                    glow: '#e6a04c',
                    amber: '#c9872a',
                },
                rust: '#8b4513',
            },
            fontFamily: {
                serif: ['Georgia', 'Cambria', 'serif'],
                display: ['Cinzel', 'serif'],
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'float': 'float 6s ease-in-out infinite',
                'shimmer': 'shimmer 3s ease-in-out infinite',
            },
            keyframes: {
                glow: {
                    '0%': { boxShadow: '0 0 20px rgba(230, 160, 76, 0.3)' },
                    '100%': { boxShadow: '0 0 40px rgba(230, 160, 76, 0.6)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                shimmer: {
                    '0%, 100%': { opacity: '0.6' },
                    '50%': { opacity: '1' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'dystopia': 'linear-gradient(to bottom, #0d0a08 0%, #1a1512 50%, #0d0a08 100%)',
            },
        },
    },
    plugins: [],
};

export default config;
