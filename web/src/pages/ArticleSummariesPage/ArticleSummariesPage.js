import ArticleSummariesCell from 'src/cells/ArticleSummariesCell'
import BlogLayout from 'src/layouts/BlogLayout'

const ArticleSummariesPage = ({ articles }) => {
  return (
    <BlogLayout articles={articles}>
      <ArticleSummariesCell />
    </BlogLayout>
  )
}

export default ArticleSummariesPage
