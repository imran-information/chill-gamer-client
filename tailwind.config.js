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
        'highest-rated-game': "url('/src/assets/highest-rated-game.svg')",

      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

