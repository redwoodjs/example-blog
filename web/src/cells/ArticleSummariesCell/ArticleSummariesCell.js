import { useQuery } from '@hammerframework/hammer-web'
import gql from 'graphql-tag'

import Article from 'src/components/Article'

const sortedArticles = (articles) => {
  return articles.sort((a, b) => {
    if (new Date(a.postedAt) < new Date(b.postedAt)) return 1
    if (new Date(a.postedAt) > new Date(b.postedAt)) return -1
    return 0
  })
}

const ArticleSummariesCell = () => {
  const { loading, data } = useQuery(gql`
    {
      posts {
        id
        title
        slug
        author
        body
        image
        postedAt
        tags {
          id
          name
        }
      }
    }
  `)

  if (loading) {
    return <div>Loading...</div>
  }

  return sortedArticles(data.posts).map((post) => (
    <Article key={post.id} article={post} summary={true} />
  ))
}

export default ArticleSummariesCell
