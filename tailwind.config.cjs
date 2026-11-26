/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E7A34",
        accentYellow: "#F9C80E",
        accentBlue: "#0A6EBE",
        bgLight: "#F5F8FA"
      }
    }
  },
  plugins: []
};
