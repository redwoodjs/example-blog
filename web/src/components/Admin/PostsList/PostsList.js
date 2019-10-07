import { Link } from 'react-router-dom'
import moment from 'moment'

const wordCount = (post) => {
  return post.body.split(' ').length
}

const PostsList = ({ posts }) => {
  return (
    <table className="w-full">
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td className="py-2">
              <Link
                to={`/admin/${post.id}/edit`}
                className="font-semibold text-indigo-700"
              >
                {post.title}
              </Link>
              <p className="text-sm text-gray-600">by {post.author}</p>
            </td>
            <td className="py-2 text-sm text-center">
              {wordCount(post)} words
            </td>
            <td className="py-2 text-sm text-right">
              Published {moment(post.postedAt).fromNow()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PostsList
