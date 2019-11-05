import { useParams } from 'react-router-dom'
import SearchCell from 'src/components/Blog/SearchCell'
import BlogLayout from 'src/layouts/BlogLayout'

const SearchPage = () => {
  const { term } = useParams()

  return (
    <BlogLayout>
      <SearchCell queryOptions={{ variables: { term } }} />
    </BlogLayout>
  )
}

export default SearchPage
