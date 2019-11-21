import PostsList from 'src/components/Admin/PostsList'

export const QUERY = gql`
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

export const Loading = () => <div>Loading...</div>

export const Success = ({ postsAll: posts }) => {
  return <PostsList posts={posts} />
}
