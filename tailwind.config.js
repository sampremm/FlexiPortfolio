/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#080810",
        bg2: "#0d0d18",
        surface: "#111120",
        border: "#1a1a2e",
        amber: "#f59e0b",
        amber2: "#fbbf24",
        green: "#10b981",
        muted: "#64748b",
        muted2: "#94a3b8",
        text: "#f1f5f9",
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Inter', 'sans-serif'], // Inter as fallback for Cabinet Grotesk
      },
    },
  },
  plugins: [],
}
