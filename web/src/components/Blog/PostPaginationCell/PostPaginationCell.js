import { Link, routes } from 'src/lib/HammerRouter'

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

export const Success = ({ page }) => {
  console.info(page)
  return (
    <ul className="list-none text-center">
      <li className={CSS.page}>
        <Link
          to={routes.home()}
          className={page === 1 ? CSS.activeLink : CSS.link}
        >
          1
        </Link>
      </li>
      <li className={CSS.page}>
        <Link
          to={routes.home({ page: 2 })}
          className={page === 2 ? CSS.activeLink : CSS.link}
        >
          2
        </Link>
      </li>
    </ul>
  )
}
