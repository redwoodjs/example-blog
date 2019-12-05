const rePath = (path) => {
  const withParams = path.replace(/:([^\/]+)/g, '(?<$1>[^/]+)')
  const fullString = `^${withParams}$`
  return fullString
}

const createNamedContext = (name, defaultValue) => {
  const Ctx = React.createContext(defaultValue)
  Ctx.displayName = name
  return Ctx
}

const LocationContext = createNamedContext('Location')

const Location = ({ children }) => (
  <LocationContext.Consumer>
    {(context) =>
      context ? (
        children(context)
      ) : (
        <LocationProvider>{children}</LocationProvider>
      )
    }
  </LocationContext.Consumer>
)

class LocationProvider extends React.Component {
  static defaultProps = {
    pathname: window.location.pathname,
  }

  constructor(props) {
    super(props)
    this.state = {
      context: {
        pathname: this.props.pathname,
      },
    }
  }

  render() {
    let { children } = this.props
    let { context } = this.state
    return (
      <LocationContext.Provider value={context}>
        {typeof children === 'function' ? children(context) : children || null}
      </LocationContext.Provider>
    )
  }
}

export const Router = (props) => (
  <Location>
    {(locationContext) => <RouterImpl {...locationContext} {...props} />}
  </Location>
)

export const RouterImpl = ({ pathname, children }) => {
  const routes = React.Children.toArray(children)
  for (let route of routes) {
    const { path, page: Page } = route.props
    const matches = Array.from(pathname.matchAll(rePath(path)))
    if (matches.length > 0) {
      const pathProps = matches[0].groups
      return <Page {...pathProps} />
    }
  }
  return <div>404</div>
}

export const Route = () => {
  return null
}

export const Link = ({ to, ...rest }) => <a href={to} {...rest} />

export const NavLink = ({ to, ...rest }) => <a href={to} {...rest} />

export const useParams = () => {
  return {}
}
