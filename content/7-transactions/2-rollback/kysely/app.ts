import { sql } from 'kysely'

try {
  await db.transaction().execute(async (trx) => {
    await trx
      .updateTable('accounts')
      .set({ balance: sql<number>`balance - 100` })
      .where('user_id', '=', 1)
      .executeTakeFirst()

    await trx
      .updateTable('accounts')
      .set({ balance: sql<number>`balance + 100` })
      .where('user_id', '=', 2)
      .executeTakeFirst()

    if (error_condition) {
      throw new Error('Transfer failed')
    }
  })
} catch {
  // transaction rolled back automatically
}
