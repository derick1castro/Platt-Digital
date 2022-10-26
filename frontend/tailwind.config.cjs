/** @type {import('tailwindcss').Config} */

const brandColors = {
  // Tons de cinza
  titleActive: "#353A3C",
  body: "#485659",
  label: "#68787B",
  placeholder: "#B4B6C5",
  line: "#DEDFE6",
  inputBackground: "#F1F1F2",
  background: "#F9F9F9",
  richBlack :"#15202B",

  // Tons de azuis
  blue: "#009CC2",
  darkBlue: "#007794",
  lightBlue: "#D6F6FE",
  bgBlue: "#E9FBFF",

  // Tons de laranja,
  orange: "#FF8A00",
  darkOrange: "#C55B00",
  lightOrange: "#FFF4E7",
  bgOrange: "#FFFAF3",
};

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...brandColors,

        backgroundColor: brandColors.background,
        textColor: brandColors.titleActive,
      },
    },
  },
  plugins: [],
};
