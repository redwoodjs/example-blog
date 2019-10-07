import AdminPostForm from 'src/components/Admin/PostForm'

const NewPost = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold text-gray-600">New Post</h1>
      <div className="mt-8">
        <AdminPostForm />
      </div>
    </>
  )
}

export default NewPost
