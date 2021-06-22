"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.schema = void 0;

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

const schema = (0, _graphqlTag.default)`
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
`;
exports.schema = schema;
//# sourceMappingURL=posts.sdl.js.map