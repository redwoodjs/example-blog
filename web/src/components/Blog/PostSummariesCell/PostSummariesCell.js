import Post from 'src/components/Blog/Post'
import Pagination from 'src/components/Blog/Pagination'
import InlineLoader from 'src/components/InlineLoader/InlineLoader'

export const beforeQuery = ({ page, perPage }) => {
  page = page ? parseInt(page) : 1
  return { variables: { page: page, limit: perPage } }
}

export const QUERY = gql`
  query ALL_POSTS_PAGED($page: Int, $limit: Int) {
    allPosts(page: $page, limit: $limit) {
      posts {
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
      count
    }
  }
`

export const Loading = InlineLoader

const sortedPosts = (posts) => {
  return posts.slice().sort((a, b) => {
    if (new Date(a.postedAt) < new Date(b.postedAt)) return 1
    if (new Date(a.postedAt) > new Date(b.postedAt)) return -1
    return 0
  })
}

export const Success = ({ allPosts, page, perPage }) => {
  return (
    <>
      {sortedPosts(allPosts.posts).map((post) => (
        <Post key={post.id} post={post} summary={true} />
      ))}
      <Pagination count={allPosts.count} page={page} perPage={perPage} />
    </>
  )
}
