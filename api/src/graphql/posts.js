import { objectType, queryField } from 'nexus'

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
    return photon.posts.findMany()
  },
})
