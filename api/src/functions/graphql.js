import { Photon } from '@generated/photon'
import { server, makeMergedSchema } from '@hammerframework/api'
import dotenv from 'dotenv'

import * as posts from 'src/graphql/posts'
import * as tags from 'src/graphql/tags'

const schema = makeMergedSchema([posts, tags])

dotenv.config()

const photon = new Photon()

export const handler = server({
  schema,
  context: {
    photon,
  },
}).createHandler()
