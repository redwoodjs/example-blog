import { UserInputError } from '@redwoodjs/api'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const validate = (input) => {
  if (input.slug && !input.slug.match(/^\S+$/)) {
    throw new UserInputError("Can't create new post", {
      messages: {
        slug: ['contains invalid characters (no spaces allowed)'],
      },
    })
  }
}

//const Posts = {
export const allPosts = async ({
  page = 1,
  limit = 100,
  order = { postedAt: 'desc' },
}) => {
  const offset = (page - 1) * limit

  return {
    posts: prisma.post.findMany({
      include: { tags: true },
      first: limit,
      skip: offset,
      orderBy: order,
    }),
    count: prisma.post.count(),
  }
}

export const findPostById = ({ id }) => {
  return prisma.post.findOne({
    where: { id: parseInt(id) },
    include: { tags: true },
  })
}

export const findPostBySlug = ({ slug }) => {
  return prisma.post.findOne({
    where: { slug: slug },
    include: { tags: true },
  })
}

export const findPostsByTag = ({ tag }) => {
  return prisma.tag
    .findOne({
      where: { name: tag },
    })
    .posts({ include: { tags: true } })
}

export const searchPosts = ({ term }) => {
  return prisma.post.findMany({
    where: {
      OR: [{ title: { contains: term } }, { body: { contains: term } }],
    },
    include: { tags: true },
  })
}

export const postsCount = () => {
  return prisma.post.count().then((count) => ({ count }))
}

export const createPost = ({ input }) => {
  validate(input)
  return prisma.post.create({ data: input })
}

export const updatePost = ({ id, input }) => {
  validate(input)
  return prisma.post.update({ data: input, where: { id: Number(id) } })
}

export const hidePost = ({ id }) => {
  return prisma.post.update({
    data: { postedAt: null },
    where: { id: parseInt(id) },
  })
}

export const deletePost = ({ id }) => {
  return prisma.post.delete({
    where: { id: Number(id) },
  })
}
