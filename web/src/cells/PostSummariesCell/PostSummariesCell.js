import { useQuery } from '@hammerframework/hammer-web'
import gql from 'graphql-tag'

import Post from 'src/components/Post'

const sortedPosts = (posts) => {
  return posts.sort((a, b) => {
    if (new Date(a.postedAt) < new Date(b.postedAt)) return 1
    if (new Date(a.postedAt) > new Date(b.postedAt)) return -1
    return 0
  })
}

const PostSummariesCell = () => {
  const { loading, data } = useQuery(gql`
    {
      posts {
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
  `)

  if (loading) {
    return <div>Loading...</div>
  }

  return sortedPosts(data.posts).map((post) => (
    <Post key={post.id} article={post} summary={true} />
  ))
}

export default PostSummariesCell
