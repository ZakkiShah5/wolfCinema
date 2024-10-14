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
        "moreLight": "#d9d9d9",
        "darkColor": "#212529",
        "lessDarkColor": "#343a40",
        "primary": "#0daeab",
      },
      minHeight: {
        'screen-90': '90vh',
      },
    },
  },
  plugins: [],
}

