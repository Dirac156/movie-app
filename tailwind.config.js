/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        tomatoRed: '#FC4747',
        darkBlue: '#10141E',
        greyishBlue: '#5A698F',
        semiDarkBlue: '#161D2F',
        pureWhite: '#FFFFFF',
      },
      fontFamily: {
        Outfit: ['Outfit', 'sans-serif'],
      },
    },
  },

  plugins: [require('daisyui')],
}
