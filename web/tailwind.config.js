const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: { enabled: true, content: ['./src/**/*.html', './src/**/*.js'] },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Avenir', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
}
