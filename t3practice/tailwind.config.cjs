/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#9044bf",

          "secondary": "#97abef",

          "accent": "#12aa27",

          "neutral": "#211C22",

          "base-100": "#FFFFFF",

          "info": "#8FB1F0",

          "success": "#198A4C",

          "warning": "#C36304",

          "error": "#FA4C7D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

module.exports = config;
