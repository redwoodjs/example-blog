import { graphQLServerlessFunction } from '@hammerframework/hammer-api'
import Photon from '@generated/photon'

import * as posts from 'src/graphql/posts'
import * as tags from 'src/graphql/tags'

const server = graphQLServerlessFunction({
  context: async () => {
    return {
      photon: new Photon(),
    }
  },
  schemaTypes: [posts, tags]
})

export const handler = server.createHandler()
