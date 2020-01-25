import { useParams } from '@redwoodjs/router'
import AdminLayout from 'src/layouts/AdminLayout'
import EditPostCell from 'src/components/Admin/EditPostCell'

const EditPostPage = () => {
  const { id } = useParams()

  return (
    <AdminLayout>
      <EditPostCell id={id} />
    </AdminLayout>
  )
}

export default EditPostPage
