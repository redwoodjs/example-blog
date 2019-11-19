import { UserInputError } from '@hammerframework/api'
import { Photon } from '@generated/photon'

const photon = new Photon()

const validate = (input) => {
  if (input.slug && !input.slug.match(/^\S+$/)) {
    throw new UserInputError("Can't create new post", {
      messages: {
        slug: ['contains invalid characters (no spaces allowed)'],
      },
    })
  }
}

const Posts = {
  all: (args) => {
    return photon.posts.findMany({
      include: { tags: true },
    })
  },

  findById: (args) => {
    return photon.posts.findOne({
      where: { id: parseInt(args.id) },
      include: { tags: true },
    })
  },

  findBySlug: (args) => {
    return photon.posts.findOne({
      where: { slug: args.slug },
      include: { tags: true },
    })
  },

  findByTag: ({ tag }) => {
    return photon.tags
      .findOne({
        where: { name: tag },
      })
      .posts({ include: { tags: true } })
  },

  search: ({ term }) => {
    return photon.posts.findMany({
      where: {
        OR: [{ title: { contains: term } }, { body: { contains: term } }],
      },
      include: { tags: true },
    })
  },

  create: ({ input }) => {
    validate(input)
    return photon.posts.create({ data: input })
  },

  update: ({ id, input }) => {
    validate(input)
    return photon.posts.update({ data: input, where: { id: parseInt(id) } })
  },

  delete: ({ id }) => {
    return photon.posts.delete({
      where: { parseInt(id) },
    })
  },
}

export default Posts
