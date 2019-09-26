import Article from 'src/components/Article'

const ArticleSummariesCell = ({ articles }) => {
  return articles.map((article) => <Article key={article.id} article={article} summary={true} />)
}

export default ArticleSummariesCell
