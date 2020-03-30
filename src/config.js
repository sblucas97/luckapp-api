import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.resolve(__dirname, '../.env')
})

export const JWT_SECRET = process.env.SECRET || 'mysupersecret'
export const NODE_ENV = process.env.NODE_ENV || 'development'
export const PORT = process.env.PORT || 3000
export const DATABASE =
  process.env.DATABASE_URL || 'postgres://lucasbarbosa:44223820lu@localhost:5432/luckapp'
