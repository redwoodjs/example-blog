import { useParams } from 'react-router-dom'
import { useQuery } from '@hammerframework/hammer-web'
import EditPost from 'src/components/Admin/EditPost'

const EditPostCell = () => {
  const { id } = useParams()
  const { loading, data } = useQuery(
    gql`
      query POST($id: Int) {
        post(id: $id) {
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
    { variables: { id: parseInt(id) } }
  )

  if (loading) {
    return <div>Loading...</div>
  }
  return <EditPost post={data.post} />
}

export default EditPostCell
