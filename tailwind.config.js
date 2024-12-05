/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        '"Orbitron", sans-serif'
      ]
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/all-reviews/bullseye.png')",

      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

