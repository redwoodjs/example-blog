export const postsQuery = gql`
  {
    posts {
      id
      title
      slug
      postedAt
    }
  }
`

const { loading: postsLoading, data: postsData } = props.posts

const RecentPosts = () => {
  return (<h2 className="font-semibold text-indigo-800">Recent Hammers</h2>
    <ul className="text-sm mt-2">
      {postsLoading
        ? 'Loading...'
        : postsData.posts.map((post) => (
          <li key={post.id} className="my-2">
            <Link
              to={`/posts/${post.slug}`}
              className="text-indigo-600 hover:bg-indigo-100 rounded"
            >
              {post.title}
            </Link>
          </li>
        ))}
    </ul>)
}
