import { sql } from 'kysely'

const users = await db
  .selectFrom('users')
  .selectAll()
  .where('id', 'in',
    db
      .selectFrom('orders')
      .select('user_id')
      .where('amount', '>',
        db
          .selectFrom('orders')
          .select(sql<number>`avg(amount)`)
      )
  )
  .execute()
