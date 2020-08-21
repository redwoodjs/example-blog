import { AuthenticationError } from '@redwoodjs/api'

import { db } from './db'

export const getCurrentUser = async ({ email }) => {
  return await db.user.findOne({ where: { email } })
}

export const requireAuth = () => {
  if (!context.currentUser) {
    throw new AuthenticationError()
  }
}
