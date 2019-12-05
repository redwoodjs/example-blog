import BlogLayout from 'src/layouts/BlogLayout'

import { useParams } from 'src/lib/HammerRouter'
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
