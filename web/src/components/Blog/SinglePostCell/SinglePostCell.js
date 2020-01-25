import Post from 'src/components/Blog/Post'

export const beforeQuery = ({ slug }) => ({
  variables: { slug },
})

export const QUERY = gql`
  query POSTS_FIND_BY_SLUG($slug: String) {
    post: findPostBySlug(slug: $slug) {
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

export const Loading = () => <div>Loading...</div>

export const Success = ({ post }) => {
  return (
    <>
      <Post post={post} />
    </>
  )
}
