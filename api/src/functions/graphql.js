import { Photon } from '@generated/photon'
import { server } from '@hammerframework/hammer-api'
import { GraphQLDateTime } from 'graphql-iso-date'
import { asNexusMethod } from 'nexus'

import * as posts from 'src/graphql/posts'
import * as tags from 'src/graphql/tags'

export const GQLDateTime = asNexusMethod(GraphQLDateTime, 'datetime')
const photon = new Photon()

export const handler = server({
  context: {
    photon,
  },
  types: [GQLDateTime, posts, tags],
}).createHandler()
