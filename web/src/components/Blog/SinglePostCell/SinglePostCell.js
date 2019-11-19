import Post from 'src/components/Blog/Post'

export const query = gql`
  query POSTS_FIND_BY_SLUG($slug: String) {
    postsFindBySlug(slug: $slug) {
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

const SinglePost = ({ postsFindBySlug: post }) => {
  return (
    <>
      <h1>{post.id}</h1>
      <Post post={post} />
    </>
  )
}

export default SinglePost
