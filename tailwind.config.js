/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixelify: ['Pixelify Sans', 'Courier New', 'monospace'],
        citylight: ['CityLight', 'Courier New', 'monospace'],
        copperplate: ['CopperplateGothic', 'serif'],
        amoresa: ['Amoresa', 'cursive'],
      },
    },
  },
  plugins: [],
}
