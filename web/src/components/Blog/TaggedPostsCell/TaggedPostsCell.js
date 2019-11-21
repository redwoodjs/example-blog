import Post from 'src/components/Blog/Post'

export const beforeQuery = ({ tag }) => ({ variables: { tag } })

export const QUERY = gql`
  query POST($tag: String) {
    posts: findPostsByTag(tag: $tag) {
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

export const Success = ({ posts }) => {
  return posts.map((post) => <Post key={post.id} post={post} summary={true} />)
}
