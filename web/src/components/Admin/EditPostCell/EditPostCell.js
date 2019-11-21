import { useMutation } from '@hammerframework/web'
import PostForm from 'src/components/Admin/PostForm'

export const QUERY = gql`
  query PostsFindById($id: ID!) {
    postsFindById(id: $id) {
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
const POSTS_UPDATE_MUTATION = gql`
  mutation PostsUpdateMutation($id: ID!, $input: PostInput!) {
    postsUpdate(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ postsFindById: post }) => {
  const [
    postsUpdate,
    { loading: updateLoading, error: updateError },
  ] = useMutation(POSTS_UPDATE_MUTATION, {
    onCompleted: () => {
      location.href = '/admin'
    },
  })

  const onSave = (data, type) => {
    if (type === 'publish') {
      data.postedAt = new Date()
    }
    postsUpdate({ variables: { id: parseInt(post.id), input: data } })
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
