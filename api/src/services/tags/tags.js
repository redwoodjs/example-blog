import { db } from 'src/lib/db'

export const tags = () => db.tag.findMany()
