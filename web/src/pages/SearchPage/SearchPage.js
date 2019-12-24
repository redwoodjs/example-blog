import BlogLayout from 'src/layouts/BlogLayout'

import { useParams } from '@hammerframework/router'
import SearchCell from 'src/components/Blog/SearchCell'

const SearchPage = () => {
  const { term } = useParams()

  return (
    <BlogLayout>
      <SearchCell term={term} />
    </BlogLayout>
  )
}

export default SearchPage
