import { UserInputError } from '@redwoodjs/api'
import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'
import { requireAuth } from 'src/lib/auth'

const validate = (input) => {
  if (input.slug && !input.slug.match(/^\S+$/)) {
    throw new UserInputError("Can't create new post", {
      messages: {
        slug: ['contains invalid characters (no spaces allowed)'],
      },
    })
  }
}

export const allPosts = async ({
  page = 1,
  limit = 100,
  order = { postedAt: 'desc' },
}) => {
  logger.debug({ page, limit, order }, 'In all posts')
  const offset = (page - 1) * limit

  return {
    posts: db.post.findMany({
      include: { tags: true },
      take: limit,
      skip: offset,
      orderBy: order,
    }),
    count: db.post.count(),
  }
}

export const findPostById = ({ id }) => {
  logger.debug({ id }, 'In findPostById')

  return db.post.findUnique({
    where: { id: parseInt(id) },
    include: { tags: true },
  })
}

export const findPostBySlug = ({ slug }) => {
  logger.debug({ slug }, 'In findPostBySlug')

  return db.post.findUnique({
    where: { slug: slug },
    include: { tags: true },
  })
}

export const findPostsByTag = ({ tag }) => {
  return db.tag
    .findUnique({
      where: { name: tag },
    })
    .posts({ include: { tags: true } })
}

export const searchPosts = ({ term }) => {
  logger.debug({ term }, 'In searchPosts')

  return db.post.findMany({
    where: {
      OR: [{ title: { contains: term } }, { body: { contains: term } }],
    },
    include: { tags: true },
  })
}

export const postsCount = () => {
  return db.post.count().then((count) => ({ count }))
}

export const createPost = ({ input }, { context: { currentUser } }) => {
  requireAuth()
  validate(input)

  return db.post.create({ data: input })
}

export const updatePost = ({ id, input }, { context: { currentUser } }) => {
  requireAuth()
  validate(input)

  return db.post.update({ data: input, where: { id: Number(id) } })
}

export const hidePost = ({ id }, { context: { currentUser } }) => {
  requireAuth()

  return db.post.update({
    data: { postedAt: null },
    where: { id: parseInt(id) },
  })
}

export const deletePost = ({ id }, { context: { currentUser } }) => {
  requireAuth()

  return db.post.delete({
    where: { id: Number(id) },
  })
}
