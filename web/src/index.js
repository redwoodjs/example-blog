import ReactDOM from 'react-dom'
import { HammerProvider } from '@hammerframework/web'
import netlifyIdentity from 'netlify-identity-widget'
import FatalErrorPage from 'src/pages/FatalErrorPage'

import FatalErrorBoundary from 'src/lib/FatalErrorBoundary'
import Routes from 'src/Routes'

import './index.css'

if (process.env.USE_AUTHENTICATION === 'true') {
  window.netlifyIdentity = netlifyIdentity
  netlifyIdentity.init()
}

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <HammerProvider>
      <Routes />
    </HammerProvider>
  </FatalErrorBoundary>,
  document.getElementById('hammer-app')
)
