import { sql } from 'kysely'

const rows = await db
  .with('high_value', (db) =>
    db
      .selectFrom('orders')
      .select([
        'user_id',
        sql<number>`sum(amount)`.as('total'),
      ])
      .groupBy('user_id')
      .having(sql`sum(amount)`, '>', 1000)
  )
  .selectFrom('users as u')
  .innerJoin('high_value as h', 'h.user_id', 'u.id')
  .select(['u.name', 'h.total'])
  .execute()
