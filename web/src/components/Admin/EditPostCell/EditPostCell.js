import { useMutation } from '@hammerframework/hammer-web'

import PostForm from 'src/components/Admin/PostForm'

export const query = gql`
  query FindPostById($id: ID!) {
    findPostById(id: $id) {
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
const UPDATE_POST_MUTATION = gql`
  mutation UpdatePostMutation($id: ID!, $input: PostInput!) {
    updatePost(id: $id, input: $input) {
      id
    }
  }
`

export const Loader = () => <div>Loading...</div>

const EditPostCell = ({ findPostById: post }) => {
  const [
    updatePost,
    { loading: updateLoading, error: updateError },
  ] = useMutation(UPDATE_POST_MUTATION, {
    onCompleted: () => {
      location.href = '/admin'
    },
  })

  const onSave = (data, type) => {
    if (type === 'publish') {
      data.postedAt = new Date()
    }
    updatePost({ variables: { id: parseInt(post.id), input: data } })
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-600">
        Edit Post {post.id}
      </h1>
      <div className="mt-8">
        <PostForm
          post={post}
          save={false}
          publish="Update"
          onSave={onSave}
          error={updateError}
          loading={updateLoading}
        />
      </div>
    </div>
  )
}

export default EditPostCell
