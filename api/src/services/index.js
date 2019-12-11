import { makeMergedServices } from '@hammerframework/api'

import * as posts from './posts'

export const services = makeMergedServices({ services: { posts } })
