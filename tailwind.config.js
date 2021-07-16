const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gridTemplateColumns: {
      'review-wall': 'repeat(10, minmax(30%, 300px))',
      ...defaultTheme.gridTemplateColumns,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
