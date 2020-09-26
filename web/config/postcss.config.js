const path = require('path')

const { getPaths } = require('@redwoodjs/internal')

module.exports = {
  plugins: [
    require('tailwindcss')(path.resolve(__dirname, '../tailwind.config.js')),
    require('autoprefixer'),
  ],
}
