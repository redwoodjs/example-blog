import { NavLink } from 'src/lib/HammerRouter'

const CSS = {
  page: 'inline-block mx-1 text-indigo-400',
  link: 'py-1 px-3',
  activeLink: 'py-1 px-3 bg-indigo-100 text-indigo-600 rounded',
}

export const QUERY = gql`
  query POSTS_COUNT($page: Int) {
    count: postsCount(page: $page) {
      count
    }
  }
`

export const beforeQuery = ({ page }) => {
  return { variables: { page: parseInt(page) } }
}

export const Loading = () => <div>Loading...</div>

export const Success = (props) => {
  console.info(props)
  return (
    <ul className="list-none text-center">
      <li className={CSS.page}>
        <NavLink
          to="/"
          className={CSS.link}
          activeClassName={CSS.activeLink}
          isActive={(match, location) => {
            return location.search === '' || location.search.match(`page=1`)
          }}
        >
          1
        </NavLink>
      </li>
      <li className={CSS.page}>
        <NavLink
          to="/?page=2"
          className={CSS.link}
          activeClassName={CSS.activeLink}
          isActive={(match, location) => {
            return location.search.match(`page=2`)
          }}
        >
          2
        </NavLink>
      </li>
    </ul>
  )
}
