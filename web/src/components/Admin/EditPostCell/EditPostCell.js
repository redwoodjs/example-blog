import { useMutation } from '@hammerframework/hammer-web'

import PostForm from 'src/components/Admin/PostForm'

export const query = gql`
  query POSTS_FIND_BY_ID($id: ID!) {
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
const UPDATE_POST = gql`
  mutation POST($id: ID!, $input: PostInput!) {
    postsUpdate(id: $id, input: $input) {
      id
    }
  }
`

export const Loader = () => <div>Loading...</div>

const EditPostCell = ({ postsFindById: post }) => {
  const [postsUpdate, { loading: updateLoading, error: updateError }] = useMutation(UPDATE_POST, {
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
      <h1 className="text-2xl font-semibold text-gray-600">Edit Post {post.id}</h1>
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
