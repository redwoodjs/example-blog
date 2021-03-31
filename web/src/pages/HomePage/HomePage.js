import { useParams } from '@redwoodjs/router'
import PostSummariesCell from 'src/components/Blog/PostSummariesCell'

const POSTS_PER_PAGE = 5

const HomePage = () => {
  let { page } = useParams()
  page = page || 1

  return <PostSummariesCell page={parseInt(page)} perPage={POSTS_PER_PAGE} />
}

export default HomePage
