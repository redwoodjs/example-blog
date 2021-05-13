import gql from 'graphql-tag'
import Post from 'src/components/Blog/Post'
import InlineLoader from 'src/components/InlineLoader/InlineLoader'

export const beforeQuery = ({ term }) => ({ variables: { term } })

export const QUERY = gql`
  query SearchPosts($term: String) {
    posts: searchPosts(term: $term) {
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
`

export const Loading = InlineLoader

export const Success = ({ posts, variables }) => {
  return (
    <>
      <h2 className="mt-5 text-lg text-indigo-400">
        Found {posts.length} article
        {posts.length == 1 ? '' : 's'} including &ldquo;
        {variables.term}&rdquo;:
      </h2>
      {posts.length ? (
        posts.map((post) => <Post key={post.id} post={post} summary={true} />)
      ) : (
        <h3 className="mt-4 text-xl text-gray-500">
          Try a different search term
        </h3>
      )}
    </>
  )
}
