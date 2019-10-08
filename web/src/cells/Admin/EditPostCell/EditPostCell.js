import { useParams } from 'react-router-dom'
import { useQuery, useMutation } from '@hammerframework/hammer-web'
import EditPost from 'src/components/Admin/EditPost'

const GET_POST = gql`
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
`

const UPDATE_POST = gql`
  mutation POST(
    $id: Int!
    $title: String
    $slug: String
    $author: String
    $body: String
    $postedAt: DateTime
  ) {
    postUpdate(
      id: $id
      title: $title
      slug: $slug
      author: $author
      body: $body
      postedAt: $postedAt
    ) {
      id
    }
  }
`

const EditPostCell = () => {
  const { id } = useParams()
  const { loading: getLoading, data: getData } = useQuery(GET_POST, {
    variables: { id: parseInt(id) },
  })

  const [
    postUpdate,
    { loading: updateLoading, error: updateError },
  ] = useMutation(UPDATE_POST, {
    onCompleted: () => {
      location.href = '/admin'
    },
  })

  const onSave = (data, type) => {
    if (type === 'publish') {
      data.postedAt = new Date()
    }
    postUpdate({ variables: Object.assign(data, { id: parseInt(id) }) })
  }

  if (getLoading) {
    return <div>Loading...</div>
  }

  return (
    <EditPost
      post={getData.post}
      onSave={onSave}
      loading={getLoading && updateLoading}
      error={updateError}
    />
  )
}

export default EditPostCell
