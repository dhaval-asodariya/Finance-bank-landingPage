/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
     'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#FF5555',
      },
      fontFamily: {
        clash_bold: ['"ClashDisplay-Bold"', 'sans-serif'],
        clash_Semibold: ['"ClashDisplay-Semibold"', 'sans-serif'],
        clash_Regular: ['"ClashDisplay-Regular"', 'sans-serif'],
        clash_Medium: ['"ClashDisplay-Medium"', 'sans-serif'],

      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

