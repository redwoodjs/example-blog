import { Link, routes } from '@redwoodjs/router'

const Pagination = ({ count, page, perPage }) => {
  const items = []
  for (let i = 0; i < Math.ceil(count / perPage); i++) {
    items.push(
      <li key={i} className="inline-block mx-1 text-indigo-400">
        <Link
          to={routes.home({ page: i + 1 })}
          className={
            page === i + 1
              ? 'py-1 px-3 bg-indigo-100 text-indigo-600 rounded'
              : 'py-1 px-3'
          }
        >
          {i + 1}
        </Link>
      </li>
    )
  }

  return <ul className="list-none text-center">{items}</ul>
}

export default Pagination
