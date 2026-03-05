import { sql } from 'kysely'

const rows = await sql<{
  id: number
  name: string
  email: string
}[]>`
  SELECT id, name, email
  FROM users
  WHERE age > ${25} AND city = ${'NYC'}
`.execute(db)
