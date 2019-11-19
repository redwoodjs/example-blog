import { useParams } from 'react-router-dom'

import AdminLayout from 'src/layouts/AdminLayout'
import EditPostCell from 'src/components/Admin/EditPostCell'

const EditPostPage = () => {
  const { id } = useParams()

  return (
    <AdminLayout>
      <EditPostCell queryOptions={{ variables: { id } }} />
    </AdminLayout>
  )
}

export default EditPostPage
