import {
  objectType,
  queryField,
  mutationField,
  stringArg,
  booleanArg,
} from 'nexus'

import { users } from 'src/interfaces'

export const User = objectType({
  name: 'User',
  definition (t) {
    t.int('id')
    t.boolean('isAdmin')
    t.string('email')
  },
})

export const usersAll = queryField('users', {
  type: User,
  list: true,
  nullable: true,
  resolve (_root, _args, _context) {
    return users.all()
  },
})

export const usersCreate = mutationField('usersCreate', {
  type: User,
  args: {
    email: stringArg({ required: true }),
    isAdmin: booleanArg({ default: false }),
  },
  resolve (_root, { email, isAdmin }, _context) {
    return users.create({ email, isAdmin })
  },
})
