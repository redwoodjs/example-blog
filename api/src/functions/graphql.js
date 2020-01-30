import importAll from '@redwoodjs/core/dist/importAll.macro'
import { server, makeMergedSchema, makeServices } from '@redwoodjs/api'

const schemas = importAll('api', 'graphql')
const services = importAll('api', 'services')

export const handler = server({
  schema: makeMergedSchema({
    schemas,
    services: makeServices({ services }),
  }),
}).createHandler()
