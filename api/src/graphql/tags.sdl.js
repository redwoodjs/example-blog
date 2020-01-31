import { gql } from '@redwoodjs/api'

export const schema = gql`
  type Tag {
    id: ID!
    name: String
  }

  type Query {
    tags: [Tag]
  }
`
