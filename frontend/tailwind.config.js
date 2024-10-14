const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
   ],
   theme: {
      colors: {
         transparent: 'transparent',
         current: 'currentColor',
         'text': '#4c5665',
         'darkerText': '#2f2e38',
         'darkBlue': '#1d3557',
         'lightBlue': '#a8dae3',
         'custom-yellow': '#fbb13c',
         'lightYellow': '#fdd48a',
         'custom-orange': '#f28705',
         'wine': '#951f52',
         'lightWine': '#b42263',
      },

      fontFamily: {
         'title': ['Josefin', 'sans-serif'],
         'logo': ['Vacaciones', 'sans-serif'],
      },

      extend: {
         fontFamily: {
            'sans': ['Quicksand', ...defaultTheme.fontFamily.sans],
         },
         container: {
            center: true,
            padding: {
               DEFAULT: '1rem',
               md: '2rem',
               lg: '3rem',
            },
         },
      },
   },
   plugins: [],
};
