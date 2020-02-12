import PostsList from 'src/components/Admin/PostsList'

export const QUERY = gql`
  query ALL_POSTS {
    allPosts {
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
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ allPosts }) => {
  return <PostsList posts={allPosts.posts} />
}
