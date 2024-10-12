/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
   theme: {
    extend: {
      fontFamily: {
        sans: ["Cabin", 'sans']
      },
      colors:{
        "light": "#edf2f4",
        "darkColor": "#353535" ,
        "primary": "#0daeab",
      },
    },
  },
  plugins: [],
}

