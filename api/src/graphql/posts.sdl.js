import { gql } from '@hammerframework/api'

import { services } from 'src/services'
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

  type RecordCount {
    count: Int
  }

  type Query {
    allPosts(page: Int, limit: Int): [Post]
    findPostById(id: ID): Post
    findPostBySlug(slug: String): Post
    findPostsByTag(tag: String): [Post]
    searchPosts(term: String): [Post]
    postsCount(page: Int): RecordCount
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
    allPosts: services.posts.allPosts,
    findPostById: services.posts.findPostById,
    findPostBySlug: services.posts.findPostBySlug,
    findPostsByTag: services.posts.findPostsByTag,
    searchPosts: services.posts.searchPosts,
    postsCount: services.posts.postsCount,
  },
  Mutation: {
    createPost: services.posts.createPost,
    updatePost: services.posts.updatePost,
    hidePost: services.posts.hidePost,
    deletePost: services.posts.deletePost,
  },
}
