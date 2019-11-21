import { Photon } from '@generated/photon'
import { server, makeMergedSchema } from '@hammerframework/api'
import dotenv from 'dotenv'

import * as posts from 'src/graphql/posts.sdl'
import * as tags from 'src/graphql/tags.sdl'

const schema = makeMergedSchema([posts, tags])

dotenv.config()

const photon = new Photon()

export const handler = server({
  schema,
  context: {
    photon,
  },
}).createHandler()
