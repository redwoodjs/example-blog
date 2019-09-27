import { graphQLServerlessFunction } from '@hammerframework/hammer-api'
import { getPhoton } from 'src/lib/photon'

const server = graphQLServerlessFunction({
  context: async () => {
    return {
      photon: await getPhoton(),
    }
  },
})

export const handler = server.createHandler()
