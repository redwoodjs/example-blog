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

export const resolvers = {
  Query: {
    allPosts: (_root, args) => {
      return Posts.allPosts(args)
    },

    findPostById: (_root, args) => {
      return Posts.findPostById(args)
    },

    findPostBySlug: (_root, args) => {
      return Posts.findPostBySlug(args)
    },

    findPostsByTag: (_root, args) => {
      return Posts.findPostsByTag(args)
    },

    searchPosts: (_root, args) => {
      return Posts.searchPosts(args)
    },
  },

  Mutation: {
    createPost: (_root, args) => {
      return Posts.createPost(args)
    },

    updatePost: (_root, args) => {
      return Posts.updatePost(args)
    },

    hidePost: (_root, args) => {
      return Posts.hidePost(args)
    },

    deletePost: (_root, args) => {
      return Posts.deletePost(args)
    },
  },
}
