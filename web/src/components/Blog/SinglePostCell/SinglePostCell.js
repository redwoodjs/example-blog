import Post from 'src/components/Blog/Post'

export const query = gql`
  query POST($slug: String) {
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
  return <Post post={post} />
}

export default SinglePost
