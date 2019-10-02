import { useQuery } from '@hammerframework/hammer-web'
import { useParams } from 'react-router-dom'
import gql from 'graphql-tag'
import Post from 'src/components/Post'

const PostCell = () => {
  const { slug } = useParams()
  const { loading, data } = useQuery(
    gql`
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
    `,
    { variables: { slug } }
  )

  if (loading) {
    return <div>Loading...</div>
  }

  return <Post post={data.post} summary={false} />
}

export default PostCell
