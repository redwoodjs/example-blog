import ArticleSummariesCell from 'src/cells/ArticleSummariesCell'
import BlogLayout from 'src/layouts/BlogLayout'

const sortedArticles = (articles) => {
  return articles.sort((a, b) => {
    if (new Date(a.postedAt) < new Date(b.postedAt)) return 1
    if (new Date(a.postedAt) > new Date(b.postedAt)) return -1
    return 0
  })
}

const ArticleSummariesPage = ({ articles }) => {
  return (
    <BlogLayout articles={articles}>
      <ArticleSummariesCell articles={sortedArticles(articles)} />
    </BlogLayout>
  )
}

export default ArticleSummariesPage
