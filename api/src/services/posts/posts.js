import { UserInputError } from '@redwoodjs/api'
import { MQTTPubSub } from 'graphql-mqtt-subscriptions'

// `db` is the prisma client; `db.x` is a Prisma-generated CRUD operation based on the model
// See https://www.prisma.io/docs/prisma-client/basic-data-access/writing-data-JAVASCRIPT-rsc6/
//
// The operations for Post can be found via `Object.getOwnPropertyNames(db.post)`, currently:
//    count
//    create
//    delete
//    deleteMany
//    findMany
//    findOne
//    update
//    updateMany
//    upsert

import { db } from 'src/lib/db'

const pubsub = new MQTTPubSub()
const POST_CHANGED = 'POST_CHANGED'

// helpers

const validate = (input) => {
  if (input.slug && !input.slug.match(/^\S+$/)) {
    throw new UserInputError("Can't create new post", {
      messages: {
        slug: ['contains invalid characters (no spaces allowed)'],
      },
    })
  }
}

const setSubtract = (left, right) =>
  new Set([...left].filter((x) => !right.has(x)))

// data access

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

// @@later utility function to handle connect / disconnect for any model

export const createPost = ({ input }) => {
  validate(input)

  // replace input.tags string,of,tags with GraphQL nested object
  // -- in create, all tags are net-add -- always use connect operation
  if (input.tags) {
    const addTags = input.tags
      .split(',')
      .reduce((prev, curr) => [...prev, { name: curr }], [])
    input.tags = { connect: addTags }
  } else {
    delete input.tags
  }

  delete input.priorTags
  return db.post.create({ data: input })
}

export const updatePost = ({ id, input }) => {
  validate(input)

  // replace input.tags string,of,tags with GraphQL nested object
  // -- in update, tags can be net-add (connect) or net-delete (disconnect)
  if (input.tags || input.priorTags) {
    const tagsSet = input.tags
      ? new Set((input.tags || '').split(','))
      : new Set()
    const priorTagsSet = input.priorTags
      ? new Set((input.priorTags || '').split(','))
      : new Set()
    input.tags = {}

    const addTags = [...setSubtract(tagsSet, priorTagsSet)].reduce(
      (prev, curr) => [...prev, { name: curr }],
      []
    )
    if (addTags.length) {
      input.tags.connect = addTags
    }

    const dropTags = [...setSubtract(priorTagsSet, tagsSet)].reduce(
      (prev, curr) => [...prev, { name: curr }],
      []
    )
    if (dropTags.length) {
      input.tags.disconnect = dropTags
    }
  } else {
    delete input.tags
  }

  delete input.priorTags
  pubsub.publish(POST_CHANGED, { postChanged: { id } })
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
