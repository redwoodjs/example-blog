import { useLocation } from 'react-router-dom'
import BlogLayout from 'src/layouts/BlogLayout'

import PostSummariesCell from 'src/components/Blog/PostSummariesCell'
import PostPaginationCell from 'src/components/Blog/PostPaginationCell'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const PostSummariesPage = () => {
  const query = useQuery()
  const page = query.get('page') || 1

  return (
    <BlogLayout>
      <PostSummariesCell page={page} />
      <PostPaginationCell page={page} />
    </BlogLayout>
  )
}

export default PostSummariesPage
