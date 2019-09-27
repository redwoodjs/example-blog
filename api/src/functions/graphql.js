import { graphQLServerlessFunction } from '@hammerframework/hammer-api'

const server = graphQLServerlessFunction()
export const handler = server.createHandler()
