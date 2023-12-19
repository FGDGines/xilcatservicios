/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      content: {
        'logo': 'url("./src/assets/Logo_white.png")'
      },
      colors: {
        'cs-purple': {
          DEFAULT: '#2C2949',
          'light': '#6C6798'
        },
        'cs-gray': '#252323'
      }
    },
  },
  plugins: [],
}

