/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        primary: {
          50: '#faf6fe',
          100: '#f2eafd',
          200: '#e7d9fb',
          300: '#cbabf6',
          400: '#ba8ef2',
          500: '#a063e9',
          600: '#8943da',
          700: '#7531bf',
          800: '#632d9c',
          900: '#52257e',
          950: '#350f5c',
        },
      },
      screens: {
        xs: '320px',
      },
    },
  },
  plugins: [],
};
