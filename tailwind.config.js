/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
            'primary-color':'#B4F461',
            'secondary-color': ''
          },
            backgroundImage:{
            'discuss-bg': "url('')",
          },
            fontFamily: {
            'lexend': "Lexend, sans-serif",
          }
      },
    },
    plugins: [],
  }