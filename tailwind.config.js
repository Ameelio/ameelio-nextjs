module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flexGrow: {
      0: 0,
      DEFAULT: 1,
      2: 2,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
