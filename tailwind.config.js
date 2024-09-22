/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
            'primary-color':'',
            'secondary-color': ''
          },
            backgroundImage:{
            'discuss-bg': "url('')",
          },
            fontFamily: {
            'manrope': "Manrope, sans-serif",
          }
      },
    },
    plugins: [],
  }