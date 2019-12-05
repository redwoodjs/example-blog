import BlogLayout from 'src/layouts/BlogLayout'

import PostSummariesCell from 'src/components/Blog/PostSummariesCell'
import PostPaginationCell from 'src/components/Blog/PostPaginationCell'
import { useParams } from 'src/lib/HammerRouter'

const POSTS_PER_PAGE = 5

const HomePage = () => {
  let { page } = useParams()
  page = page || 1

  return (
    <BlogLayout>
      <PostSummariesCell page={page} perPage={POSTS_PER_PAGE} />
      <PostPaginationCell page={page} perPage={POSTS_PER_PAGE} />
    </BlogLayout>
  )
}

export default HomePage
