export const schema = gql`
  type Tag {
    id: ID!
    name: String
  }

  type Query {
    tags: [Tag]
  }

  input TagInput {
    name: String!
  }

  type Subscription {
    tagChanged: Tag
  }

  type Mutation {
    updateTag(id: ID!, input: TagInput!): Tag
    deleteTag(id: ID!): Tag
  }
`
