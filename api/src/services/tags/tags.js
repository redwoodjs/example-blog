import { MQTTPubSub } from 'graphql-mqtt-subscriptions'

import { db } from 'src/lib/db'

const pubsub = new MQTTPubSub()

const TAG_CHANGED = 'TAG_CHANGED'

export const tags = () => db.tag.findMany()

export const updateTag = ({ id, input }) => {
  pubsub.publish(TAG_CHANGED, { tagChanged: { id } })
  return db.tag.update({ data: input, where: { id: Number(id) } })
}

export const findTagById = ({ id }) => {
  return db.tag.findOne({
    where: { id: parseInt(id) },
  })
}

export const tagChanged = {
  subscribe: () => pubsub.asyncIterator([TAG_CHANGED]),
}
