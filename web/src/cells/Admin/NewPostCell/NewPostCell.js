import { useMutation } from '@hammerframework/hammer-web'
import NewPost from 'src/components/Admin/NewPost'

const CREATE_POST = gql`
  mutation POST(
    $title: String!
    $slug: String!
    $author: String!
    $body: String!
    $image: String
    $postedAt: DateTime
  ) {
    postCreate(
      title: $title
      slug: $slug
      author: $author
      body: $body
      image: $image
      postedAt: $postedAt
    ) {
      id
    }
  }
`

const NewPostCell = () => {
  const [postCreate, { loading, error }] = useMutation(CREATE_POST, {
    onCompleted: () => {
      location.href = '/admin'
    },
  })

  const onSave = (data, type) => {
    if (type === 'publish') {
      data.postedAt = new Date()
    }
    postCreate({ variables: data })
  }

  return <NewPost onSave={onSave} loading={loading} error={error} />
}

export default NewPostCell
