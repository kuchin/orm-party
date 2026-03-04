import { sql } from 'kysely'

// Kysely has no model instances; returns typed rows.
type UserRow = {
  id: number
  name: string
  email: string
}

const users = await sql<UserRow[]>`
  SELECT * FROM users WHERE age > ${25}
`.execute(db)
