import { objectType, queryField } from 'nexus'

export const Tag = objectType({
  name: 'Tag',
  definition(t) {
    t.int('id')
    t.string('name')
  },
})

export const tagsAll = queryField('tags', {
  type: Tag,
  list: true,
  nullable: true,
  resolve(_root, _args, { photon }) {
    return photon.tags.findMany()
  },
})
