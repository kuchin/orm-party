import { sql } from 'kysely'

const rows = await sql<{
  id: number
  name: string
  email: string
}[]>`
  SELECT id, name, email
  FROM users
  WHERE created_at > '2024-01-01'
`.execute(db)
