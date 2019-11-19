import PostsList from 'src/components/Admin/PostsList'

export const query = gql`
  {
    postsAll {
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

const PostsCell = ({ postsAll: posts }) => {
  return <PostsList posts={posts} />
}

export default PostsCell
