export const schema = gql`
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
    allPosts(page: Int, limit: Int): PostsSet @skipAuth
    findPostById(id: ID): Post @skipAuth
    findPostBySlug(slug: String): Post @skipAuth
    findPostsByTag(tag: String): [Post] @skipAuth
    searchPosts(term: String): [Post] @skipAuth
  }

  input PostInput {
    title: String!
    slug: String!
    author: String!
    body: String!
    image: String
    postedAt: DateTime
  }

  type Mutation {
    createPost(input: PostInput!): Post @requireAuth
    updatePost(id: ID!, input: PostInput!): Post @requireAuth
    hidePost(id: ID!): Post @requireAuth
    deletePost(id: ID!): Post @requireAuth
  }
`
