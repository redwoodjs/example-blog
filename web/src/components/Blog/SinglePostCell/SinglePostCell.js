import Post from 'src/components/Blog/Post'

export const query = gql`
  query POST($slug: String) {
    post(slug: $slug) {
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

const SinglePost = ({ post = {} }) => {
  return <Post post={post} />
}

export default SinglePost
