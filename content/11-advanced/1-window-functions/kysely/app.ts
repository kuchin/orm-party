import { sql } from 'kysely'

const orders = await db
  .selectFrom('orders')
  .select([
    'name',
    'amount',
    sql<number>`row_number() over (order by amount desc)`.as('rank'),
  ])
  .execute()
