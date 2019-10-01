import { useParams } from 'react-router-dom'

import Post from 'src/components/Post'
import BlogLayout from 'src/layouts/BlogLayout'

const SingleArticlePage = ({ posts }) => {
  let { slug } = useParams()

  const post = posts.find((post) => {
    return post.slug === slug
  })

  return (
    <BlogLayout>
      <Post post={post} summary={false} />
    </BlogLayout>
  )
}

export default SingleArticlePage
