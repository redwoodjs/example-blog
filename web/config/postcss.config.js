const path = require('path')

const { getPaths } = require('@redwoodjs/internal')

module.exports = {
  plugins: [
    require('tailwindcss')(
      path.resolve(getPaths().web.base, 'tailwind.config.js')
    ),
    require('autoprefixer'),
  ],
}
