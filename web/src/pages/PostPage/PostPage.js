import { useParams } from '@redwoodjs/router'
import SinglePostCell from 'src/components/Blog/SinglePostCell'

const PostPage = () => {
  const { slug } = useParams()
  return <SinglePostCell slug={slug} />
}

export default PostPage
