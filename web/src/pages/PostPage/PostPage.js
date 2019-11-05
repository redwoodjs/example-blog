import { useParams } from 'react-router-dom'

import BlogLayout from 'src/layouts/BlogLayout'
import SinglePostCell from 'src/components/SinglePostCell'

const PostPage = () => {
  const { slug } = useParams()

  return (
    <BlogLayout>
      <SinglePostCell queryOptions={{ variables: { slug } }} />
    </BlogLayout>
  )
}

export default PostPage
