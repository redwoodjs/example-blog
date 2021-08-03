import {
  createGraphQLHandler,
  makeMergedSchema,
  makeServices,
} from '@redwoodjs/graphql-server'

import schemas from 'src/graphql/**/*.{js,ts}'
import services from 'src/services/**/*.{js,ts}'
import { getCurrentUser } from 'src/lib/auth.js'
import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

export const handler = createGraphQLHandler({
  loggerConfig: { logger, options: { operationName: true, tracing: true } },
  getCurrentUser,
  schema: makeMergedSchema({
    schemas,
    services: makeServices({ services }),
  }),
  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect()
  },
})
