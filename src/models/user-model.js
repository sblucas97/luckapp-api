import Knex from 'knex'
import knexConfig from '../database/knexfile'
import { NODE_ENV } from '../config'

const knex = Knex(knexConfig[NODE_ENV])

const User = {
  fetchAllUsers: () => knex.select().from('users'),
  create: newUser => knex('users').insert(newUser).returning('*'),
  deleteUser: id => knex('users').where('id', '=', id).del(),
  findByEmail: email => knex.select().from('users').where('email', '=', email),
  findById: id => knex.select().from('users').where('id', '=', id),
}

export default User
