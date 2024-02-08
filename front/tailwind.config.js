/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      boxShadow: {
        'cs-box': '0px 0px 16px rgba(17,17,26,0.1)',
        'cs-box-big': '0px 0px 50px rgba(17,17,26,0.1)'
      },
      gridTemplateRows: {
        '10': 'repeat(10, minmax(0, 1fr))'
      },
      content: {
        'logo': 'url("./src/assets/Logo_white.png")'
      },
      colors: {
        'cs-purple': {
          DEFAULT: '#2C2949',
          'light': '#6C6798'
        },
        'cs-gray': {
          DEFAULT: '#252323',
          'light': '#5F5959'
        },
        'cs-blue': {
          DEFAULT: "#00A8E8"
        }
      }
    },
  },
  plugins: [],
}

