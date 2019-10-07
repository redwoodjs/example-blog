import { Link } from 'react-router-dom'
import AdminLayout from 'src/layouts/AdminLayout'
import AdminPostsCell from 'src/cells/Admin/PostsCell'

const PostsPage = () => {
  return (
    <AdminLayout>
      <AdminPostsCell />
    </AdminLayout>
  )
}

export default PostsPage
