import { useQuery } from '@hammerframework/hammer-web'
import { useParams } from 'react-router-dom'
import gql from 'graphql-tag'
import Post from 'src/components/Blog/Post'

const SearchCell = () => {
  const { term } = useParams()
  const { loading, data } = useQuery(
    gql`
      query POST($term: String) {
        postSearch(term: $term) {
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
    `,
    { variables: { term } }
  )

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h2 className="mt-5 text-lg text-indigo-400">
        Found {data.postSearch.length} article
        {data.postSearch.length == 1 ? '' : 's'} including &ldquo;{term}&rdquo;:
      </h2>
      {data.postSearch.length ? (
        data.postSearch.map((post) => (
          <Post key={post.id} post={post} summary={true} />
        ))
      ) : (
        <h3 className="mt-4 text-xl text-gray-500">
          Try a different search term
        </h3>
      )}
    </>
  )
}

export default SearchCell
