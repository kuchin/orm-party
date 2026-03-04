import { sql } from 'kysely'

await db.transaction().execute(async (trx) => {
  const user = await trx
    .insertInto('users')
    .values({
      name: 'Alice',
      email: 'alice@example.com',
    })
    .returning('id')
    .executeTakeFirstOrThrow()

  await trx
    .updateTable('accounts')
    .set({ balance: sql<number>`balance - 100` })
    .where('user_id', '=', user.id)
    .executeTakeFirst()
})
