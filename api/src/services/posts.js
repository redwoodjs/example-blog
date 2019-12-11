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

export const allPosts = ({
  page = 1,
  limit = 5,
  order = { postedAt: 'desc' },
}) => {
  const offset = (page - 1) * limit

  return photon.posts.findMany({
    include: { tags: true },
    first: limit,
    skip: offset,
    orderBy: order,
  })
}

export const findPostById = ({ id }) => {
  return photon.posts.findOne({
    where: { id: parseInt(id) },
    include: { tags: true },
  })
}

export const findPostBySlug = ({ slug }) => {
  return photon.posts.findOne({
    where: { slug: slug },
    include: { tags: true },
  })
}

export const findPostsByTag = ({ tag }) => {
  return photon.tags
    .findOne({
      where: { name: tag },
    })
    .posts({ include: { tags: true } })
}

export const searchPosts = ({ term }) => {
  return photon.posts.findMany({
    where: {
      OR: [{ title: { contains: term } }, { body: { contains: term } }],
    },
    include: { tags: true },
  })
}

export const postsCount = ({ page }) => {
  return photon.posts.count()
}

export const createPost = ({ input }) => {
  validate(input)
  return photon.posts.create({ data: input })
}

export const updatePost = ({ id, input }) => {
  validate(input)
  return photon.posts.update({ data: input, where: { id: parseInt(id) } })
}

export const hidePost = ({ id }) => {
  return photon.posts.update({
    data: { postedAt: null },
    where: { id: parseInt(id) },
  })
}

export const deletePost = ({ id }) => {
  return photon.posts.delete({
    where: { id: parseInt(id) },
  })
}
