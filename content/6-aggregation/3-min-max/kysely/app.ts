import { sql } from 'kysely'

const result = await db
  .selectFrom('orders')
  .select([
    sql<number>`min(amount)`.as('smallest'),
    sql<number>`max(amount)`.as('largest'),
  ])
  .executeTakeFirst()

// Per user
const perUser = await db
  .selectFrom('orders')
  .select([
    'user_id',
    sql<number>`min(amount)`.as('smallest'),
    sql<number>`max(amount)`.as('largest'),
  ])
  .groupBy('user_id')
  .execute()
