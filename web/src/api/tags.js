import gql from 'graphql-tag'

export const TAGS = gql`
  {
    tags {
      id
      name
    }
  }
`
