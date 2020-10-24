import { useMutation } from '@redwoodjs/web'
import PostForm from 'src/components/Admin/PostForm'

import { QUERY } from 'src/components/Admin/PostsCell'

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
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
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
