import { Link, routes } from '@redwoodjs/router'
import InlineLoader from 'src/components/InlineLoader/InlineLoader'

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

export const Loading = InlineLoader

export const Success = ({ allPosts }) => {
  return (
    <div className="">
      <h2 className="font-semibold text-indigo-800">Recent Hammers</h2>
      <ul className="mt-2 text-sm">
        {allPosts.posts.map((post) => (
          <li key={post.id} className="my-2">
            <Link
              to={routes.post({ slug: post.slug })}
              className="text-indigo-600 rounded hover:bg-indigo-100"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
