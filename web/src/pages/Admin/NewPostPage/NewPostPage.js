import { Link } from 'react-router-dom'
import AdminLayout from 'src/layouts/AdminLayout'
import AdminNewPost from 'src/components/Admin/NewPost'

const NewPostPage = () => {
  return (
    <AdminLayout>
      <AdminNewPost />
    </AdminLayout>
  )
}

export default NewPostPage
