import PostForm from 'src/components/Admin/PostForm'

const NewPost = (props) => {
  return (
    <>
      <h1 className="text-2xl font-semibold text-gray-600">New Post</h1>
      <div className="mt-8">
        <PostForm {...props} save={true} />
      </div>
    </>
  )
}

export default NewPost
