import { db } from 'src/lib'

// https://github.com/prisma/prisma2/blob/master/docs/photon/api.md#crud

export const create = ({ email, isAdmin }) => {
  return db.users.create({ data: { email, isAdmin } })
}

export const update = ({ id, email, isAdmin }) => {
  return db.users.update({ where: { id }, data: { email, isAdmin } })
}

export const all = () => {
  return db.users.findMany()
}
