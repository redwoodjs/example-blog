import { useParams } from 'react-router-dom'

import ArticleSummariesCell from 'src/cells/ArticleSummariesCell'
import BlogLayout from 'src/layouts/BlogLayout'

const TaggedArticlesPage = ({ articles }) => {
  let { tag } = useParams()

  const filteredArticles = articles.filter((article) => {
    return article.tags.indexOf(tag) !== -1
  })

  return (
    <BlogLayout articles={articles}>
      <ArticleSummariesCell articles={filteredArticles} />
    </BlogLayout>
  )
}

export default TaggedArticlesPage
