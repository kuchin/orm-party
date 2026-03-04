import { sql } from 'kysely'

// Orders per month
const perMonth = await db
  .selectFrom('orders')
  .select([
    sql<Date>`date_trunc('month', created_at)`.as('month'),
    sql<number>`count(id)`.as('order_count'),
    sql<number>`sum(amount)`.as('total'),
  ])
  .groupBy(sql`date_trunc('month', created_at)`)
  .orderBy('month', 'asc')
  .execute()
