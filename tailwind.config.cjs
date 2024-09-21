module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: '#23282f',
        secondaryDarkBackground: '#2b2c2f',
        standardBlue: 'rgba(128, 165, 177, 1)',
        standardBlueHighlight: 'rgba(151, 195, 210, 1)',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  variants: {},
  plugins: [],
}
