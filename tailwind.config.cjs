/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      textClr: "#1e1e1e",
      primary: "#3858e9",
      secondary: "#FF5A5F",
      light: "#f6f6f6",
      dark: "#1c2024",
      darkSecondary: "#23282d",
      darkOutline: "#404040",
    },
    fontSize: {
      sm: "0.8rem",
      md: "0.9rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "6xl": "3.5rem",
    },
    fontFamily: {
      primary: ["Lato", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
