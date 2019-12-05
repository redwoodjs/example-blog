import BlogLayout from 'src/layouts/BlogLayout'

import PostSummariesCell from 'src/components/Blog/PostSummariesCell'
import PostPaginationCell from 'src/components/Blog/PostPaginationCell'
import { useParams } from 'src/lib/HammerRouter'

const HomePage = () => {
  let { page } = useParams()
  page = page || 1

  return (
    <BlogLayout>
      <PostSummariesCell page={page} />
      <PostPaginationCell page={page} />
    </BlogLayout>
  )
}

export default HomePage
