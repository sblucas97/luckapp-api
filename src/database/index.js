import { Pool } from 'pg'
import { DATABASE } from 'config'

const pool = new Pool({
  connectionString: DATABASE
})

export default pool
