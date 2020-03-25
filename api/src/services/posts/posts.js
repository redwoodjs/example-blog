import { UserInputError } from '@redwoodjs/api'

import { db } from 'src/lib/db'

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
  const offset = (page - 1) * limit

  return {
    posts: db.post.findMany({
      include: { tags: true },
      first: limit,
      skip: offset,
      orderBy: order,
    }),
    count: db.post.count(),
  }
}

export const findPostById = ({ id }) => {
  return db.post.findOne({
    where: { id: parseInt(id) },
    include: { tags: true },
  })
}

export const findPostBySlug = ({ slug }) => {
  return db.post.findOne({
    where: { slug: slug },
    include: { tags: true },
  })
}

export const findPostsByTag = ({ tag }) => {
  return db.tag
    .findOne({
      where: { name: tag },
    })
    .posts({ include: { tags: true } })
}

export const searchPosts = ({ term }) => {
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

export const createPost = ({ input }) => {
  validate(input)
  return db.post.create({ data: input })
}

export const updatePost = ({ id, input }) => {
  validate(input)
  return db.post.update({ data: input, where: { id: Number(id) } })
}

export const hidePost = ({ id }) => {
  return db.post.update({
    data: { postedAt: null },
    where: { id: parseInt(id) },
  })
}

export const deletePost = ({ id }) => {
  return db.post.delete({
    where: { id: Number(id) },
  })
}
