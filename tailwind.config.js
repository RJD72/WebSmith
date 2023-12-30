/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      width: { "3/4": "75%" },
      spacing: {
        500: "600px",
      },
    },
  },
  plugins: [],
};
