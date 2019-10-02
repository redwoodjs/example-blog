import { objectType, queryField, stringArg } from 'nexus'

export const Post = objectType({
  name: 'Post',
  definition (t) {
    t.int('id')
    t.string('title')
    t.string('slug')
    t.string('author')
    t.string('body')
    t.string('image')
    t.string('postedAt')
    t.list.field('tags', {
      type: 'Tag',
      resolve (root, _args, { photon }) {
        return photon.posts.findOne({ where: { id: root.id } }).tags()
      },
    })
  },
})

export const postsAll = queryField('posts', {
  type: Post,
  list: true,
  nullable: true,
  resolve (_root, _args, { photon }) {
    return photon.posts.findMany({
      include: { tags: true },
      orderBy: { postedAt: 'desc' },
    })
  },
})

export const post = queryField('post', {
  type: Post,
  args: { slug: stringArg() },
  nullable: false,
  async resolve (_root, { slug }, { photon }) {
    const posts = await photon.posts.findMany({
      where: { slug },
      include: { tags: true },
    })
    return posts[0]
  },
})

export const postsByTag = queryField('postsByTag', {
  type: Post,
  list: true,
  args: { tag: stringArg() },
  nullable: true,
  async resolve (_root, { tag }, { photon }) {
    return await photon.tags.findOne({ where: { name: 'wood' } }).posts()
  },
})
