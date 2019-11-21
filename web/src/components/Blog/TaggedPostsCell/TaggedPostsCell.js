import Post from 'src/components/Blog/Post'

export const query = gql`
  query POST($tag: String) {
    findPostsByTag(tag: $tag) {
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

export const Loader = () => <div>Loading...</div>

const TaggedPostsCell = ({ findPostsByTag: posts }) => {
  return posts.map((post) => <Post key={post.id} post={post} summary={true} />)
}

export default TaggedPostsCell
