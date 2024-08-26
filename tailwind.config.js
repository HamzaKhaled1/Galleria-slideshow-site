/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
     
          fontFamily: {
            'custom': ["Libre Baskerville", "serif"],
          },
          fontSize: {
            '10xl': '10rem', // Custom font size
            '11xl': '12rem', // You can add more sizes as needed
      },
      backgroundImage: {
        'sharp-gradient': 'linear-gradient(to right, black 15%, white 15%)',
      },
      
    },
  },
  plugins: [],
}

