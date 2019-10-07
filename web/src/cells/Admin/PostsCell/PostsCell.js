import { useQuery } from '@hammerframework/hammer-web'
import gql from 'graphql-tag'
import AdminPostsList from 'src/components/Admin/PostsList'

const PostsCell = () => {
  const { loading, data } = useQuery(gql`
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
  `)

  if (loading) {
    return <div>Loading...</div>
  }

  return <AdminPostsList posts={data.posts} />
}

export default PostsCell
