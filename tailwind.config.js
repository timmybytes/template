module.exports = {
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundColor: {
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
        tertiary: 'var(--bg-tertiary)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        tertiary: 'var(--text-tertiary)',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        brandWhite: 'var(--brand-red)',
        brandBlack: 'var(--brand-black)',
        brandYellow: 'var(--brand-yellow)',
        brandRed: 'var(--brand-red)',
        brandBlue: 'var(--brand-blue)',
        brandGray: 'var(--brand-gray)',
      },
    },
  },
  plugins: [],
}
