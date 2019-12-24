import { server, makeMergedSchema } from '@hammerframework/api'

import * as posts from 'src/graphql/posts.sdl'
import * as tags from 'src/graphql/tags.sdl'

const schema = makeMergedSchema([posts, tags])

export const handler = server({
  schema,
}).createHandler()
