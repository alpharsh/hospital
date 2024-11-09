/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Bricolage-Grotesque': ['Bricolage Grotesque', 'sans-serif'],
      },
      keyframes: {
        wooo: {
          '0%': { transform: 'rotate3d(0, 0, 0)' },
          '50%': { transform: 'rotate3d(0, 1, 0, 180deg)' },
          '100%': { transform: 'rotate3d(0, 1, 0, 359deg)' },
        },
      },
      animation: {
        'wood-animation': 'wooo 3.5s infinite',
      },
    },
  },
  plugins: [],
}

