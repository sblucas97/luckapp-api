import path from 'path'
import { DATABASE, NODE_ENV } from 'config'

export const development = {
  client: 'pg',
  connection: DATABASE,
  ssl: NODE_ENV === 'production',
  migrations: {
    directory: path.resolve(__dirname, 'migrations')
  }
}

export const production = {
  client: 'pg',
  connection: DATABASE,
  ssl: NODE_ENV === 'production',
  migrations: {
    directory: path.resolve(__dirname, 'migrations')
  }

}
const knex = {
  development,
  production
}

export default knex
