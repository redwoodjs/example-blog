import { useMutation } from '@hammerframework/web'
import PostForm from 'src/components/Admin/PostForm'

const POSTS_CREATE_MUTATION = gql`
  mutation PostsCreateMutation($input: PostInput!) {
    postsCreate(input: $input) {
      id
    }
  }
`

const NewPost = () => {
  const [postsCreate, { loading, error }] = useMutation(POSTS_CREATE_MUTATION, {
    onCompleted: () => {
      location.href = '/admin'
    },
  })

  const onSave = (data, type) => {
    if (type === 'publish') {
      data.postedAt = new Date()
    }
    postsCreate({ variables: { input: data } })
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-600">New Post</h1>
      <div className="mt-8">
        <PostForm save={true} onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPost
