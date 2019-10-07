import { objectType, queryField, stringArg, intArg } from 'nexus'

export const Post = objectType({
  name: 'Post',
  definition(t) {
    t.int('id')
    t.string('title')
    t.string('slug')
    t.string('author')
    t.string('body')
    t.string('image')
    t.string('postedAt')
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
