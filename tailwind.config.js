/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  purge: {
    enabled: true,
    content: ["./src/**/*.tsx"],
    options: {
      safelist: ["dark"],
    },
  },
  content: ["./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    typography: (theme) => ({}),
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
