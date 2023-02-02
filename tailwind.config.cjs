/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
    './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#021b29',
        secondary: '#f2a70c',
        primary_dark: '#01141f',
        buttonText: '#333333'
      },
      fontFamily: {
        Inter: ['Inter', 'sans serif']
      }
    }
  },
  plugins: []
}
