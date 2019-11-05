import Post from 'src/components/Blog/Post'

export const query = gql`
  {
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
  }
`

export const Loader = () => <div>Loading...</div>

const sortedPosts = (posts) => {
  return posts.sort((a, b) => {
    if (new Date(a.postedAt) < new Date(b.postedAt)) return 1
    if (new Date(a.postedAt) > new Date(b.postedAt)) return -1
    return 0
  })
}
const PostSummariesCell = ({ posts }) => {
  return sortedPosts(posts).map((post) => (
    <Post key={post.id} post={post} summary={true} />
  ))
}

export default PostSummariesCell
