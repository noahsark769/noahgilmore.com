const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media', // This enables dark mode based on prefers-color-scheme
  theme: {
    extend: {
      colors: {
        darkBackground: '#23282f',
        secondaryDarkBackground: '#2b2c2f',
        standardBlue: 'rgba(128, 165, 177, 1)',
        standardBlueHighlight: 'rgba(151, 195, 210, 1)',
      },
      fontFamily: {
        serif: ['Merriweather', ...defaultTheme.fontFamily.serif],
        sans: [
          'Roboto',
          'Helvetica Neue',
          'Helvetica',
          ...defaultTheme.fontFamily.sans,
        ],
        mono: [...defaultTheme.fontFamily.mono],
      },
      typography: {
        DEFAULT: {
          css: {
            'p, li': {
              fontFamily: 'Merriweather, times, serif',
              fontSize: '18px',
              lineHeight: '29px',
              color: '#333',
              paddingBottom: '15px',
              marginTop: '15px',
            },
            blockquote: {
              backgroundColor: '#faf9f7',
              borderLeftWidth: '4px',
              borderLeftColor: '#e5e4e1',
              padding: '20px',
              fontStyle: 'italic',
              fontWeight: '300',
              '& p': {
                margin: '0',
                padding: '0',
                color: '#555',
                '&::before': {
                  display: 'none',
                },
                '&::after': {
                  display: 'none',
                },
              },
            },
            a: {
              color: '#1a3f4b',
              textDecoration: 'underline',
              transition: '0.2s ease-in-out',
              '&:hover': {
                color: '#47656e',
              },
            },
            code: {
              fontFamily: 'monospace',
              fontSize: '16px',
              padding: '3px 5px',
              margin: '0 2px',
              '&:not(.vscode-highlight-code)': {
                backgroundColor: '#faf9f7',
                border: '1px solid #e5e4e1',
                color: '#555',
              },
            },
            pre: {
              margin: '10px 0 0 0',
              padding: '0',
              border: '1px solid #e5e4e1',
              borderRadius: '2px',
              '& > code': {
                display: 'block',
                margin: '0',
                padding: '10px',
                fontFamily: 'monospace',
                fontSize: '14px',
                lineHeight: '17px',
                whiteSpace: 'pre-wrap',
              },
            },
            ol: {
              marginLeft: '30px',
              '& li': {
                listStyleType: 'decimal',
              },
            },
            'ul li': {
              listStyleType: 'square',
              marginLeft: '40px',
            },
            'h1, h2, h3, h4, h5, h6': {
              fontFamily: 'Roboto, Helvetica Neue, Helvetica, sans-serif',
              marginBottom: '10px',
              marginTop: '40px',
            },
            h1: { fontSize: '28px' },
            h2: { fontSize: '24px' },
            h3: { fontSize: '20px' },
            em: { fontStyle: 'italic' },
            strong: { fontWeight: 'bold' },
          },
        },
        dark: {
          css: {
            'p, li': { color: '#fff' },
            blockquote: {
              backgroundColor: '#2b2c2f',
              '& p': { color: '#fff' },
            },
            a: {
              color: '#60b5d1',
              '&:hover': { color: '#6bcfef' },
            },
            code: { color: '#fff' },
            'code:not(.vscode-highlight-code)': {
              color: '#fff !important',
              backgroundColor: '#3f3f3f !important',
            },
            'h1, h2, h3, h4, h5, h6': { color: '#fff' },
          },
        },
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
  plugins: [require('@tailwindcss/typography')],
}
