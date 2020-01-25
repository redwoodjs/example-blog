import BlogLayout from 'src/layouts/BlogLayout'
import { useParams } from '@redwoodjs/router'
import PostSummariesCell from 'src/components/Blog/PostSummariesCell'

const POSTS_PER_PAGE = 5

const HomePage = () => {
  let { page } = useParams()
  page = page || 1

  return (
    <BlogLayout>
      <PostSummariesCell page={parseInt(page)} perPage={POSTS_PER_PAGE} />
    </BlogLayout>
  )
}

export default HomePage
