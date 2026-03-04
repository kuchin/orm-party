await db
  .updateTable('users')
  .set({ email: 'newalice@example.com' })
  .where('id', '=', 1)
  .executeTakeFirst()
