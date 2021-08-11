module.exports = {
  mode: "jit",
  purge: [],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      animation: ["responsive", "hover", "focus"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
