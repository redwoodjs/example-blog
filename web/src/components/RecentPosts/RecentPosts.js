import { Link } from 'react-router-dom'

export const query = gql`
  {
    posts {
      id
      title
      slug
      postedAt
    }
  }
`

export const Loader = () => <div>Loading recent posts...</div>

const RecentPosts = ({ posts = [] }) => {
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

export default RecentPosts
