import { useParams } from '@redwoodjs/router'
import SearchCell from 'src/components/Blog/SearchCell'

const SearchPage = () => {
  const { term } = useParams()

  return <SearchCell term={term} />
}

export default SearchPage
