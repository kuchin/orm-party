const users = await db
  .selectFrom('users')
  .selectAll()
  .where('name', '=', 'Alice')
  .execute()
