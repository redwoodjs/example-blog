// This is Hammer's routing mechanism. It takes inspiration from both Ruby on
// Rails' routing approach and from both React Router and Reach Router (the
// latter of which has closely inspired some of this code).

import { useContext } from 'react'

// Convert the given path (from the path specified in the Route) into
// a regular expression that will match any named parameters.
//
// path - The path as specified in the <Route ... />.
//
// Examples:
//
//   reRoute('/blog/:year/:month/:day')
const reRoute = (path) => {
  const withParams = path.replace(/:([^\/]+)/g, '(?<$1>[^/]+)')
  const fullString = `^${withParams}$`
  return fullString
}

// Determine if the given route is a match for the given pathname. If so,
// extract any named params and return them in an object.
//
// route    - The route path as specified in the <Route path={...} />
// pathname - The pathname from the window.location.
//
// Examples:
//
//   matchPath('/blog/:year/:month/:day', '/blog/2019/12/07')
//   => { match: true, params: { year: '2019', month: '12', day: '07' }}
//
//   matchPath('/about', '/')
//   => { match: false }
const matchPath = (route, pathname) => {
  const matches = Array.from(pathname.matchAll(reRoute(route)))
  if (matches.length > 0) {
    const params = matches[0].groups || {}
    return { match: true, params }
  } else {
    return { match: false }
  }
}

// Parse the given search string into key/value pairs and return them in an
// object.
//
// Examples:
//
//   parseSearch('?key1=val1&key2=val2')
//   => { key1: 'val1', key2: 'val2' }
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

// Create a React Context with the given name.
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

  state = {
    context: this.getContext(),
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
    const { match, params: pathParams } = matchPath(path, pathname)
    if (match) {
      const searchParams = parseSearch(search)
      const allParams = { ...pathParams, ...searchParams }
      return (
        <ParamsContext.Provider value={allParams}>
          <Page {...allParams} />
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
