/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xsm':'500px',
      'sm': '700px',
      // => @media (min-width: 576px) { ... }

      'md': '900px',
      // => @media (min-width: 960px) { ... }

      'lg': '1100px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};