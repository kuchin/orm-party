import { sql } from 'kysely'

const average = await db
  .selectFrom('orders')
  .select(sql<number>`avg(amount)`.as('avg'))
  .executeTakeFirst()

// Average per user
const perUser = await db
  .selectFrom('orders')
  .select([
    'user_id',
    sql<number>`avg(amount)`.as('avg'),
  ])
  .groupBy('user_id')
  .execute()
