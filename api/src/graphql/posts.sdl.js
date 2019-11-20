import { gql } from '@hammerframework/api'
import Posts from 'src/services/posts'

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

  type Query {
    allPosts: [Post]
    findPostById(id: ID): Post
    findBySlug(slug: String): Post
    findPostsByTag(tag: String): [Post]
    searchPosts(term: String): [Post]
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
    createPost(input: PostInput!): Post
    updatePost(id: ID!, input: PostInput!): Post
    hidePost(id: ID!): Post
    deletePost(id: ID!): Post
  }
`

with (Posts) {
  export const resolvers = {
    Query: {
      allPosts: () => {
        return allPosts()
      },

      findPostById: (args) => {
        return findPostById(args)
      },

      findPostBySlug: (args) => {
        return findPostBySlug(args)
      },

      findPostsByTag: (args) => {
        return findPostsByTag(args)
      },

      searchPosts: (args) => {
        return searchPosts(args)
      },
    },

    Mutation: {
      createPost: (args) => {
        return createPost(args)
      },

      updatePost: (args, { context }) => {
        return updatePost(args, context)
      },

      hidePost: (args) => {
        return hidePost(args)
      },

      deletePost: (args) => {
        return deletePost(args)
      },
    },
  }
}
