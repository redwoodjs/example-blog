import Post from 'src/components/Blog/Post'

const PER_PAGE = 5

export const beforeQuery = ({ page }) => {
  page = page ? parseInt(page) : 1
  return { variables: { page: page, limit: PER_PAGE } }
}

export const QUERY = gql`
  query POSTS_COUNT($page: Int, $limit: Int) {
    posts: allPosts(page: $page, limit: $limit) {
      id
      title
      slug
      author
      body
      image
      postedAt
      tags {
        id
        name
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

const sortedPosts = (posts) => {
  return posts.sort((a, b) => {
    if (new Date(a.postedAt) < new Date(b.postedAt)) return 1
    if (new Date(a.postedAt) > new Date(b.postedAt)) return -1
    return 0
  })
}

export const Success = ({ posts }) => {
  return sortedPosts(posts).map((post) => (
    <Post key={post.id} post={post} summary={true} />
  ))
}
