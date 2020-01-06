import { useMutation } from '@redwoodjs/web'
import PostForm from 'src/components/Admin/PostForm'

const CREATE_POST_MUTATION = gql`
  mutation CreatePostMutation($input: PostInput!) {
    createPost(input: $input) {
      id
    }
  }
`

const NewPost = () => {
  const [createPost, { loading, error }] = useMutation(CREATE_POST_MUTATION, {
    onCompleted: () => {
      location.href = '/admin'
    },
  })

  const onSave = (data, type) => {
    if (type === 'publish') {
      data.postedAt = new Date()
    }
    createPost({ variables: { input: data } })
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
