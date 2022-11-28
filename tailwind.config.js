module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'sm': { 'min': '100px', 'max': '767px' },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
