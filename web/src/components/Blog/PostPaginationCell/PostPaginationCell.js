import { Link, routes } from 'src/lib/HammerRouter'

const CSS = {
  page: 'inline-block mx-1 text-indigo-400',
  link: 'py-1 px-3',
  activeLink: 'py-1 px-3 bg-indigo-100 text-indigo-600 rounded',
}

export const QUERY = gql`
  {
    postsCount {
      count
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ page, perPage, postsCount: count }) => {
  const items = []
  for (let i = 0; i < Math.ceil(count.count / perPage); i++) {
    items.push(
      <li key={i} className={CSS.page}>
        <Link
          to={routes.home({ page: i + 1 })}
          className={page === i + 1 ? CSS.activeLink : CSS.link}
        >
          {i + 1}
        </Link>
      </li>
    )
  }
  return <ul className="list-none text-center">{items}</ul>
}
