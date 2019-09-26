import { useParams } from 'react-router-dom'

import Article from 'src/components/Article'
import BlogLayout from 'src/layouts/BlogLayout'

const SingleArticlePage = ({ articles }) => {
  let { slug } = useParams()

  const article = articles.find((article) => {
    return article.slug === slug
  })

  return (
    <BlogLayout articles={articles}>
      <Article article={article} summary={false} />
    </BlogLayout>
  )
}

export default SingleArticlePage
