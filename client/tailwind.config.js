module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        zomato: 
        {
          50: '#ffe5e5',
          100: '#fabbbc',
          200: '#f08f91',
          300: '#e86367',
          400: '#e1383b',
          500: '#c71e22',
          600: '#9c1619',
          700: '#700e12',
          800: '#450608',
          900: '#1e0000',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
