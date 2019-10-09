import PostForm from 'src/components/Admin/PostForm'

const EditPost = (props) => {
  return (
    <>
      <h1 className="text-2xl font-semibold text-gray-600">
        Edit Post {props.post.id}
      </h1>
      <div className="mt-8">
        <PostForm {...props} save={false} publish="Update" />
      </div>
    </>
  )
}

export default EditPost
