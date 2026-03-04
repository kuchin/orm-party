await db
  .updateTable('users')
  .set({ name: 'Alice Smith' })
  .where('name', '=', 'Alice')
  .execute()
