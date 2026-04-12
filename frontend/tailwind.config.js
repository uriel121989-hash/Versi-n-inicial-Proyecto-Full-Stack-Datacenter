/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0f172a',
        'brand-blue': '#0066ff', 
        'brand-light-blue': '#00ccff',
        'btn-blue': '#38bdf8',
        'btn-pink': '#ec4899',
        'btn-orange': '#f97316',
        'btn-yellow': '#eab308',
        'btn-green': '#84cc16'
      }
    },
  },
  plugins: [],
}
