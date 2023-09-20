module.exports = {
  purge: ["./src/**/*.jsx"],
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "dark-mode": { raw: "(prefers-color-scheme: dark)" }
    }
  },
  variants: {},
  plugins: []
};
