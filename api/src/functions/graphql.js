import { graphQLServerlessFunction } from '@hammerframework/hammer-api'
import { Photon } from '@generated/photon'
import { GraphQLDateTime } from 'graphql-iso-date'
import { asNexusMethod } from 'nexus'

import * as posts from 'src/graphql/posts'
import * as tags from 'src/graphql/tags'

export const GQLDateTime = asNexusMethod(GraphQLDateTime, 'datetime')

const server = graphQLServerlessFunction({
  context: {
    photon: new Photon(),
  },
  schemaTypes: [GQLDateTime, posts, tags],
})

export const handler = server.createHandler()
