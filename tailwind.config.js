/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* Editorial Canvas */
        canvas: '#F4F4F0',
        ink: '#111111',
        obsidian: '#0D0E11',
        'soft-white': '#EDEDED',
        
        /* Editorial Secondary */
        subtle: '#6F6F6F',
        'subtle-dark': '#9E9E9E',
        
        /* Surface */
        surface: {
          light: '#FFFFFF',
          dark: '#14161B',
        },
        
        /* Muted Technical Accent */
        accent: {
          DEFAULT: '#10B981',
          muted: '#059669',
          dark: '#047857',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderColor: {
        DEFAULT: 'rgba(0, 0, 0, 0.12)',
        dark: 'rgba(255, 255, 255, 0.12)',
      },
    },
  },
  plugins: [],
}
