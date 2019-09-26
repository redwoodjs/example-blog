import ReactDOM from 'react-dom'
import { HammerProvider } from '@hammerframework/hammer-web'

import Routes from 'src/pages/Routes'

import './index.css'

ReactDOM.render(
  <HammerProvider>
    <Routes />
  </HammerProvider>,
  document.getElementById('hammer-app')
)
