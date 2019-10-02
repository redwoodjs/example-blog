import { graphQLServerlessFunction } from '@hammerframework/hammer-api'

import * as posts from 'src/graphql/posts'
import * as tags from 'src/graphql/tags'
import { getPhoton } from 'src/lib/photon'

const server = graphQLServerlessFunction({
  context: async () => {
    return {
      photon: await getPhoton(),
    }
  },
  schemaTypes: [posts, tags]
})

export const handler = server.createHandler()
