import { gql, UserInputError } from '@hammerframework/api'

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
    post(slug: String, id: ID): Post
    posts: [Post]
    postsByTag(tag: String): [Post]
    postsBySearch(term: String): [Post]
  }

  input TodoInput {
    title: String!
    slug: String!
    author: String!
    body: String!
    image: String
    postedAt: DateTime!
  }
  type Mutation {
    postCreate(input: TodoInput!): Post
    postUpdate(input: TodoInput!): Post
    postDelete(id: ID!): Post
  }
`

const validate = (args) => {
  if (args.slug && !args.slug.match(/^\S+$/)) {
    throw new UserInputError("Can't create new post", {
      messages: {
        slug: ['contains invalid characters (no spaces allowed)'],
      },
    })
  }
}

export const resolvers = {
  Query: {
    post: (_root, args, { photon }) => {
      return photon.posts.findOne({ where: args })
    },
    posts: (_root, _args, { photon }) => {
      return photon.posts.findMany({
        include: { tags: true },
        orderBy: { postedAt: 'desc' },
      })
    },
    postsByTag: (_root, { tag }, { photon }) => {
      return photon.tags.findOne({ where: { name: tag } }).posts()
    },
    postsBySearch: (_root, { term }, { photon }) => {
      return photon.posts.findMany({
        where: {
          OR: [{ title: { contains: term } }, { body: { contains: term } }],
        },
      })
    },
  },
  Mutation: {
    postCreate: (_root, { input }, { photon }) => {
      validate(input)
      return photon.posts.create({ data: input })
    },
    postUpdate: (_root, { input }, { photon }) => {
      validate(input)
      return photon.posts.update({ data: input, where: { id: input.id } })
    },
    postDelete: (_root, { id }, { photon }) => {
      return photon.posts.delete({
        where: { id },
      })
    },
  },
}
