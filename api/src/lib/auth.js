import { db } from './db'

export const getCurrentUser = async ({ email }) => {
  return await db.user.findOne({ where: { email } })
}
