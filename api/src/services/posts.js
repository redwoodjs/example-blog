import { Photon } from '@generated/photon'

const photon = new Photon()

export default posts = {
  all: () => {
    return photon.posts.findMany({
      include: { tags: true },
      orderBy: { postedAt: 'desc' },
    })
  },

  one: (args) => {
    return photon.posts.findOne({ where: args })
  },

  byTag: (tag) => {
    photon.tags.findOne({ where: { name: tag } }).posts()
  },

  search: (term) => {
    return photon.posts.findMany({
      where: {
        OR: [{ title: { contains: term } }, { body: { contains: term } }],
      },
    })
  },
}
