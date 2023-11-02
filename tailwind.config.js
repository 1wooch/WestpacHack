/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'westpac-red': '#DA1710',
      },
      fill: {
        'westpac-red': '#DA1710',
      },
      fontSize: {
        '2xl-large': '1.5rem', // Adjust the size as needed
        '3xl-large':'2rem',
        '4xl-large':'2.5rem',
      },
      height: {
        '24': 'rem', // You can adjust the size as needed
      },
      theme:{
        minwidth:{
          'small':'25%',
          '1/2':'50%',
          '3/4':'75%',
        }
      }
    },
  },
  plugins: [],
}

