/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kalnia', 'serif'], // Mantén tu fuente existente
        lato: ['Lato', 'sans-serif'], // Define la nueva fuente
      },
    },
  },
  plugins: [],
}
