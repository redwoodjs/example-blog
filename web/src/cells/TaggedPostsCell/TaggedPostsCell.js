import { useQuery } from '@hammerframework/hammer-web'
import { useParams } from 'react-router-dom'
import gql from 'graphql-tag'

import Post from 'src/components/Post'

const TaggedPostsCell = (props) => {
  const { tag } = useParams()
  const { loading, data } = useQuery(
    gql`
      query POST($tag: String) {
        postsByTag(tag: $tag) {
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
    { variables: { tag } }
  )

  if (loading) {
    return <div>Loading...</div>
  }

  return data.postsByTag.map((post) => (
    <Post key={post.id} post={post} summary={true} />
  ))
}

export default TaggedPostsCell
