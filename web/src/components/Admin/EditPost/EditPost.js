import PostForm from 'src/components/Admin/PostForm'

const EditPost = ({ post }) => {
  return (
    <>
      <h1 className="text-2xl font-semibold text-gray-600">
        Edit Post #{post.id}
      </h1>
      <div className="mt-8">
        <PostForm post={post} />
      </div>
    </>
  )
}

export default EditPost
