import PostForm from 'src/components/Admin/PostForm'

const NewPost = ({ onSave, loading, error }) => {
  return (
    <>
      <h1 className="text-2xl font-semibold text-gray-600">New Post</h1>
      <div className="mt-8">
        <PostForm onSave={onSave} loading={loading} error={error} />
      </div>
    </>
  )
}

export default NewPost
