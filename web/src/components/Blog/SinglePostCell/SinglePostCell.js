import Post from 'src/components/Blog/Post'
import PostsCell from 'src/components/Admin/PostsCell'

export const query = gql`
  query POSTS_FIND_BY_SLUG($slug: String) {
    findPostBySlug(slug: $slug) {
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

export const Loader = () => <div>Loading...</div>

const SinglePost = ({ findPostBySlug: post }) => {
  return (
    <>
      <Post post={post} />
    </>
  )
}

export default SinglePost
