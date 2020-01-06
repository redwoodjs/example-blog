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

export const resolvers = {
  Query: {
    tags: (_root, _args, { photon }) => photon.tags.findMany(),
  },
}
