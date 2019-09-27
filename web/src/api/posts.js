import gql from 'graphql-tag'

export const POSTS = gql`
  {
    posts {
      id
      title
      slug
      postedAt
    }
  }
`
