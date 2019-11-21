import ReactDOM from 'react-dom'
import { HammerProvider } from '@hammerframework/web'
import netlifyIdentity from 'netlify-identity-widget'

import Routes from 'src/Routes'

import './index.css'

if (process.env.USE_AUTHENTICATION === 'true') {
  window.netlifyIdentity = netlifyIdentity
  netlifyIdentity.init()
}

ReactDOM.render(
  <HammerProvider>
    <Routes />
  </HammerProvider>,
  document.getElementById('hammer-app')
)
