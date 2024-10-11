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
         'title': '#2f2e38',
         'text': '#4c5665',
         'darkBlue': '#1d3557',
         'lightBlue': '#a8dae3',
         'yellow': '#fbb13c',
         'lightYellow': '#fdd48a',
         'orange': '#f28705',
         'bordeau': '#af1b3f',
         'lightBordeau': '#af1b3f',
      },
      extend: {},
   },
   plugins: [],
};
