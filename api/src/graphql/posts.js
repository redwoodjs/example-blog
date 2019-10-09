import {
  objectType,
  queryField,
  stringArg,
  arg,
  intArg,
  mutationField,
} from 'nexus'
import { UserInputError } from 'apollo-server-core'

const validate = (args) => {
  if (args.slug && !args.slug.match(/^\S+$/)) {
    throw new UserInputError("Can't create new post", {
      messages: {
        slug: ['contains invalid characters (no spaces allowed)'],
      },
    })
  }
}

export const Post = objectType({
  name: 'Post',
  definition(t) {
    t.int('id')
    t.string('title')
    t.string('slug')
    t.string('author')
    t.string('body')
    t.string('image', { nullable: true })
    t.datetime('postedAt', { nullable: true })
    t.list.field('tags', {
      type: 'Tag',
      resolve(root, _args, { photon }) {
        return photon.posts.findOne({ where: { id: root.id } }).tags()
      },
    })
  },
})

export const postsAll = queryField('posts', {
  type: Post,
  list: true,
  nullable: true,
  resolve(_root, _args, { photon }) {
    return photon.posts.findMany({
      include: { tags: true },
      orderBy: { postedAt: 'desc' },
    })
  },
})

export const post = queryField('post', {
  type: Post,
  args: { slug: stringArg(), id: intArg() },
  nullable: false,
  async resolve(_root, where, { photon }) {
    return await photon.posts.findOne({ where })
  },
})

export const postsByTag = queryField('postsByTag', {
  type: Post,
  list: true,
  args: { tag: stringArg() },
  nullable: true,
  async resolve(_root, { tag }, { photon }) {
    return await photon.tags.findOne({ where: { name: tag } }).posts()
  },
})

export const postSearch = queryField('postSearch', {
  type: Post,
  list: true,
  args: { term: stringArg() },
  nullable: true,
  async resolve(_root, { term }, { photon }) {
    return await photon.posts.findMany({
      where: {
        OR: [{ title: { contains: term } }, { body: { contains: term } }],
      },
    })
  },
})

export const postCreate = mutationField('postCreate', {
  type: Post,
  args: {
    title: stringArg({ required: true }),
    slug: stringArg({ required: true }),
    author: stringArg({ required: true }),
    body: stringArg({ required: true }),
    postedAt: arg({ type: 'DateTime', required: false }),
  },
  async resolve(_root, args, { photon }) {
    validate(args)
    return await photon.posts.create({ data: args })
  },
})

export const postUpdate = mutationField('postUpdate', {
  type: Post,
  args: {
    id: intArg({ required: true }),
    title: stringArg({ required: false }),
    slug: stringArg({ required: false }),
    author: stringArg({ required: false }),
    body: stringArg({ required: false }),
    postedAt: arg({ type: 'DateTime', required: false }),
  },
  async resolve(_root, args, { photon }) {
    validate(args)
    return await photon.posts.update({ data: args, where: { id: args.id } })
  },
})

export const postDelete = mutationField('postDelete', {
  type: Post,
  args: {
    id: intArg({ required: true }),
  },
  async resolve(_root, { id }, { photon }) {
    return await photon.posts.delete({
      where: { id },
    })
  },
})
