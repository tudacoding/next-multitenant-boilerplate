/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // rất quan trọng!
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
