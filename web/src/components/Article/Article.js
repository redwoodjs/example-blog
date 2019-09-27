import { Link } from 'react-router-dom'
import moment from 'moment'

import TagList from 'src/components/TagList'

const MarkdownIt = require('markdown-it')
const md = new MarkdownIt()

const Article = ({ article, summary }) => {
  const formattedDate = (date) => {
    return moment(date).fromNow()
  }

  const formattedBody = (article) => {
    let output = article.body
    if (summary) {
      output = output.split('\n\n').shift()
    }

    return md.render(output)
  }

  return (
    <article className="mt-4 mb-12">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">
          <Link
            to={`/posts/${article.slug}`}
            className="text-indigo-600 hover:bg-indigo-100 rounded"
          >
            {article.title}
          </Link>
        </h1>
        <h2 className="text-sm text-gray-600">by {article.author}</h2>
      </header>
      <div className="mt-2">
        <img src={article.image} className="float-left mt-1 mr-4 w-48" />
        <div
          className="markdown"
          dangerouslySetInnerHTML={{ __html: formattedBody(article) }}
        ></div>
        {summary && (
          <p className="clearfix">
            <Link
              to={`/posts/${article.slug}`}
              className="inline-block mt-4 text-indigo-600 text-sm rounded font-medium hover:bg-indigo-100 rounded"
            >
              Continue reading &raquo;
            </Link>
          </p>
        )}
      </div>
      <footer className="flex items-center mt-4 text-xs text-gray-600">
        <time>Posted: {formattedDate(article.postedAt)}</time>
        <ul className="flex-1 text-right">
          <TagList tags={article.tags} />
        </ul>
      </footer>
    </article>
  )
}

export default Article
