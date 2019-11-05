import { useParams } from 'react-router-dom'

import BlogLayout from 'src/layouts/BlogLayout'
import TaggedPostsCell from 'src/components/Blog/TaggedPostsCell'

const TaggedPostsPage = () => {
  const { tag } = useParams()

  return (
    <BlogLayout>
      <TaggedPostsCell queryOptions={{ variables: { tag } }} />
    </BlogLayout>
  )
}

export default TaggedPostsPage
