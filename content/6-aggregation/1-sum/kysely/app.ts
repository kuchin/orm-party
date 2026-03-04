import { sql } from 'kysely'

// Total of all order amounts
const total = await db
  .selectFrom('orders')
  .select(sql<number>`sum(amount)`.as('total'))
  .executeTakeFirst()

// Total per user
const perUser = await db
  .selectFrom('orders')
  .select([
    'user_id',
    sql<number>`sum(amount)`.as('total'),
  ])
  .groupBy('user_id')
  .execute()
