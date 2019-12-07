import { useContext } from 'react'

const rePath = (path) => {
  const withParams = path.replace(/:([^\/]+)/g, '(?<$1>[^/]+)')
  const fullString = `^${withParams}$`
  return fullString
}

const parseSearch = (search) => {
  if (search === '') {
    return {}
  }
  const searchPart = search.substring(1)
  const pairs = searchPart.split('&')
  const searchProps = {}
  pairs.forEach((pair) => {
    const keyval = pair.split('=')
    searchProps[keyval[0]] = keyval[1] || ''
  })
  return searchProps
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

const createHistory = () => {
  const listeners = []

  return {
    listen: (listener) => {
      listeners.push(listener)
      window.addEventListener('popstate', () => {
        listener()
      })
    },
    navigate: (to) => {
      window.history.pushState({}, null, to)
      listeners.forEach((listener) => listener())
    },
  }
}

const gHistory = createHistory()

export const navigate = gHistory.navigate

class LocationProvider extends React.Component {
  static defaultProps = {
    location: window.location,
  }

  constructor(props) {
    super(props)
    this.state = {
      context: this.getContext(),
    }
  }

  getContext() {
    const { pathname, search, hash } = this.props.location
    return { pathname, search, hash }
  }

  componentDidMount() {
    gHistory.listen(() => {
      this.setState(() => ({ context: this.getContext() }))
    })
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

const ParamsContext = createNamedContext('Params', {})

// The first time the routes are loaded, iterate through them and create the named
// route functions.

let namedRoutes = {}
let namedRoutesDone = false

const mapNamedRoutes = (routes) => {
  for (let route of routes) {
    const { path, name, notfound } = route.props
    if (notfound) {
      continue
    }
    namedRoutes[name] = (args = {}) => {
      let newPath = path
      const queryParams = []

      Object.keys(args).forEach((key) => {
        if (newPath.match(`:${key}`)) {
          newPath = newPath.replace(`:${key}`, args[key])
        } else {
          queryParams.push(`${key}=${args[key]}`)
        }
      })

      if (queryParams.length) {
        newPath += `?${queryParams.join('&')}`
      }

      return newPath
    }
  }
  namedRoutesDone = true
}

export const routes = namedRoutes

// The guts of the router implementation.

const RouterImpl = ({ pathname, search, children }) => {
  const routes = React.Children.toArray(children)
  if (!namedRoutesDone) {
    mapNamedRoutes(routes)
  }

  let NotFoundPage

  for (let route of routes) {
    const { path, page: Page, notfound } = route.props
    if (notfound) {
      NotFoundPage = Page
      continue
    }
    const matches = Array.from(pathname.matchAll(rePath(path)))
    if (matches.length > 0) {
      const pathProps = matches[0].groups || {}
      const searchProps = parseSearch(search)
      const allProps = { ...pathProps, ...searchProps }
      return (
        <ParamsContext.Provider value={allProps}>
          <Page {...pathProps} />
        </ParamsContext.Provider>
      )
    }
  }

  return (
    <ParamsContext.Provider value={{}}>
      <NotFoundPage />
    </ParamsContext.Provider>
  )
}

export const Route = () => {
  return null
}

export const Link = ({ to, ...rest }) => (
  <a
    href={to}
    {...rest}
    onClick={(event) => {
      event.preventDefault()
      navigate(to)
    }}
  />
)

export const NavLink = ({ to, className, activeClassName, ...rest }) => {
  const context = useContext(LocationContext)
  const theClassName = to === context.pathname ? activeClassName : className
  return (
    <a
      href={to}
      className={theClassName}
      {...rest}
      onClick={(event) => {
        event.preventDefault()
        navigate(to)
      }}
    />
  )
}

export const useParams = () => {
  const params = useContext(ParamsContext)
  return params
}
