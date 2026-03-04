import { Kysely, PostgresDialect } from 'kysely'
import { Pool } from 'pg'

interface DB {
  users: {
    id: number
    name: string
    email: string
    created_at: Date
  }
}

const db = new Kysely<DB>({
  dialect: new PostgresDialect({
    pool: new Pool({
      connectionString: process.env.DATABASE_URL,
    }),
  }),
})
