/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'dark': '#070F18',
        'secondary': '#575455',
        'biru': '#1F7CFF',
        'pink': '#F75C4E',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

