import { useParams } from 'react-router-dom'

import PostSummariesCell from 'src/cells/PostSummariesCell'
import BlogLayout from 'src/layouts/BlogLayout'

const TaggedArticlesPage = ({ articles }) => {
  let { tag } = useParams()

  const filteredArticles = articles.filter((article) => {
    return article.tags.indexOf(tag) !== -1
  })

  return (
    <BlogLayout articles={articles}>
      <PostSummariesCell articles={filteredArticles} />
    </BlogLayout>
  )
}

export default TaggedArticlesPage
