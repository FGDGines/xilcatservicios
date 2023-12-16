/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      content: {
        'logo': 'url("./src/assets/Logo_white.png")'
      },
      colors: {
        'cs-purple': '#2C2949',
        'cs-gray': '#252323'
      }
    },
  },
  plugins: [],
}

