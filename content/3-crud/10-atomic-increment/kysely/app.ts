import { sql } from 'kysely'

await db
  .updateTable('users')
  .set({ views: sql<number>`views + 1` })
  .where('id', '=', 1)
  .executeTakeFirst()
