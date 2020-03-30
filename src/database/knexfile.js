import { DATABASE } from 'config'

export const development = {
  client: 'pg',
  connection: DATABASE
}

const knex = {
  development
}

export default knex
