const path = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    path.join(__dirname, "src/**/*.{js,ts,jsx,tsx,mdx}"),
  ],
  theme: {
    extend: {
      colors: {
        petrol: {
          50: "#E6F0F2",
          100: "#C2D9DE",
          200: "#8FB8C1",
          300: "#5C97A4",
          400: "#357F8D",
          500: "#0F3B44",
          600: "#0D343D",
          700: "#0A2A31",
          800: "#071F25",
          900: "#041519",
        },
        gold: {
          50: "#FBF6ED",
          100: "#F5E9D1",
          200: "#EDD4A6",
          300: "#E0BC79",
          400: "#C8A96E",
          500: "#B08D4A",
          600: "#8C7038",
          700: "#685328",
          800: "#44371A",
          900: "#221B0D",
        },
        cream: "#F8F6F3",
      },
    },
  },
  plugins: [],
};
