import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query ALL_POSTS_RECENT {
    allPosts {
      posts {
        id
        title
        slug
        postedAt
      }
    }
  }
`

export const Loading = () => <div>Loading recent posts...</div>

export const Success = ({ allPosts }) => {
  return (
    <div className="">
      <h2 className="font-semibold text-indigo-800">Recent Hammers</h2>
      <ul className="text-sm mt-2">
        {allPosts.posts.map((post) => (
          <li key={post.id} className="my-2">
            <Link
              to={routes.post({ slug: post.slug })}
              className="text-indigo-600 hover:bg-indigo-100 rounded"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
