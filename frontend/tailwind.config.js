/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#F0F9FF', // Azul cielo muy claro
        'brand-dark': '#0F172A', // Navy oscuro para textos
        'brand-primary': '#FF7A00', // Naranja para botones
        'brand-secondary': '#0EA5E9', // Azul brillante para acentos
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 60H0V0h60v60zM1 59h58V1H1v58z' fill='%230EA5E9' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [],
}
