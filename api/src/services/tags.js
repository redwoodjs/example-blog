import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

export const tags = () => db.tag.findMany()
