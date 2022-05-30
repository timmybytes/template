const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
      brandWhite: '#F9F4F5',
      brandBlack: '#161925',
      brandYellow: '#e9c46a',
      brandRed: '#D44D5C',
      brandBlue: '#65afff',
      brandGray: '#2e4057',
    },
    transitions: {
      basic: '.3s',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
