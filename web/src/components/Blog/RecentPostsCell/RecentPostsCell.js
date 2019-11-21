import { Link } from 'react-router-dom'

export const QUERY = gql`
  {
    posts: postsAll {
      id
      title
      slug
      postedAt
    }
  }
`

export const Loading = () => <div>Loading recent posts...</div>

export const Success = ({ posts }) => {
  return (
    <div className="">
      <h2 className="font-semibold text-indigo-800">Recent Hammers</h2>
      <ul className="text-sm mt-2">
        {posts.map((post) => (
          <li key={post.id} className="my-2">
            <Link
              to={`/posts/${post.slug}`}
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
