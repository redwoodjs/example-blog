import { useParams } from '@redwoodjs/router'
import EditPostCell from 'src/components/Admin/EditPostCell'

const EditPostPage = () => {
  const { id } = useParams()

  return <EditPostCell id={id} />
}

export default EditPostPage
