import { sql } from 'kysely'

const users = await db
  .selectFrom('orders')
  .select([
    'user_id',
    sql<number>`sum(amount)`.as('total'),
  ])
  .groupBy('user_id')
  .having(sql`sum(amount)`, '>', 1000)
  .execute()
