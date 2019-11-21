import { useParams } from 'react-router-dom'
import BlogLayout from 'src/layouts/BlogLayout'

import SinglePostCell from 'src/components/Blog/SinglePostCell'

const PostPage = () => {
  const { slug } = useParams()
  return (
    <BlogLayout>
      <SinglePostCell slug={slug} />
    </BlogLayout>
  )
}

export default PostPage
