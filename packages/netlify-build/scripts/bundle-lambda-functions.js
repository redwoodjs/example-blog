const path = require('path')
const fs = require('fs-extra')

const { zipFunctions } = require('@netlify/zip-it-and-ship-it')
const { getHammerConfig } = require('@hammerframework/hammer-core')

const hammerConfig = getHammerConfig()

const FUNCTIONS_BUILD_PATH = path.join(hammerConfig.baseDir, 'api/dist/functions')
const FUNCTIONS_DIST_PATH = path.join('./dist/api')

const WEB_BUILD_PATH = path.join(hammerConfig.baseDir, 'web/dist')
const WEB_DIST_PATH = path.join('./dist/web')


try {
  fs.mkdirSync(FUNCTIONS_DIST_PATH)
  fs.mkdirSync(WEB_DIST_PATH)
} catch (e) {
  // do nothing.
}

zipFunctions(FUNCTIONS_BUILD_PATH, FUNCTIONS_DIST_PATH)
  .then(() => {
    console.log('📦 zipped api lambda functions')
  })
  .catch((e) => {
    console.log(e)
  })

fs.copy(WEB_BUILD_PATH, WEB_DIST_PATH)
  .then(() => console.log('📦 moved web files'))
  .catch((e) => { console.error(e)})


