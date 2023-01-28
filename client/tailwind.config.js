/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#FFF",
      black: "#000",
      "dark-gray": "#333",
      "bright-red": "#FC4747",
      "midnight-blue": "#10141E",
      "navy-blue": "#161D2F",
      "steel-blue": "#5A698F",
    },
    extend: {},
  },
  plugins: [],
};
