import { sql } from 'kysely'

const result = await db
  .selectFrom('users')
  .select(sql<number>`count(*)`.as('count'))
  .where('name', '=', 'Alice')
  .executeTakeFirst()

const count = result?.count ?? 0
