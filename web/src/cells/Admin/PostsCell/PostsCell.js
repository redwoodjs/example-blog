import { useQuery, useMutation } from '@hammerframework/hammer-web'
import gql from 'graphql-tag'
import AdminPostsList from 'src/components/Admin/PostsList'

const GET_POSTS = gql`
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
const UPDATE_POST = gql`
  mutation POST($id: Int!, $postedAt: DateTime) {
    postUpdate(id: $id, postedAt: $postedAt) {
      id
    }
  }
`
const DELETE_POST = gql`
  mutation POST($id: Int!) {
    postDelete(id: $id) {
      id
    }
  }
`

const PostsCell = () => {
  const onHide = (id) => {
    postUpdate({ variables: { id: parseInt(id), postedAt: null } })
  }
  const onDelete = (id) => {
    postDelete({ variables: { id: parseInt(id) } })
  }

  const [
    postDelete,
    { loading: _deleteLoading, error: _deleteError },
  ] = useMutation(DELETE_POST, {
    onCompleted: () => {
      location.reload()
    },
  })

  const [
    postUpdate,
    { loading: _updateLoading, error: _updateError },
  ] = useMutation(UPDATE_POST, {
    onCompleted: () => {
      location.reload()
    },
  })

  const { loading: getLoading, data: getData } = useQuery(GET_POSTS)

  if (getLoading) {
    return <div>Loading...</div>
  }

  return (
    <AdminPostsList posts={getData.posts} onHide={onHide} onDelete={onDelete} />
  )
}

export default PostsCell
