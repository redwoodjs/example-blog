export const schema = gql`
  enum MutationType {
    CREATED
    UPDATED
    DELETED
  }

  type Post {
    id: ID!
    title: String!
    slug: String!
    body: String!
    author: String!
    image: String
    postedAt: DateTime
    tags: [Tag]
  }

  type PostsSet {
    posts: [Post]!
    count: Int!
  }

  type Query {
    allPosts(page: Int, limit: Int): PostsSet
    findPostById(id: ID): Post
    findPostBySlug(slug: String): Post
    findPostsByTag(tag: String): [Post]
    searchPosts(term: String): [Post]
  }

  type Subscription {
    postChanged: Post
  }

  input PostInput {
    title: String!
    slug: String!
    tags: String
    priorTags: String
    author: String!
    body: String!
    image: String
    postedAt: DateTime
  }

  type Mutation {
    createPost(input: PostInput!): Post
    updatePost(id: ID!, input: PostInput!): Post
    hidePost(id: ID!): Post
    deletePost(id: ID!): Post
  }
`

// input PostSubscriptionWhereInput {
//   mutation_in: [MutationType!]
//   updatedFields_contains: String
//   AND: [PostSubscriptionWhereInput!]
//   OR: [PostSubscriptionWhereInput!]
// }
