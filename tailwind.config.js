const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gridTemplateColumns: {
      "review-wall": "repeat(10, minmax(30%, 300px))",
      ...defaultTheme.gridTemplateColumns,
    },
    colors: {
      ...defaultTheme.colors,
      blue: {
        100: "#EBF4FB",
        200: "#C8E2F6",
        300: "#83C5F5",
        400: "#569FE1",
        500: "#3577DA",
        600: "#2E47BD",
        700: "#0C2C5A",
      },
      gray: {
        // 50: '#fafafa',
        100: '#EFEFF4',
        200: '#D9D8DE',
        300: '#B8B7BD',
        400: '#969399',
        500: '#676569',
        600: '#3F3C40',
        700: '#0A0A0A',
        // 800: '#27272a',
        // 900: '#18181b',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
