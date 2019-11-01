import { useParams } from 'react-router-dom'
import BlogLayout from 'src/layouts/BlogLayout'

import Post from 'src/components/Post'

const PostPage = () => {
  const { slug } = useParams()

  return (
    <BlogLayout>
      <Post summary={false} queryOptions={{ variables: { slug } }} />
    </BlogLayout>
  )
}

export default PostPage
