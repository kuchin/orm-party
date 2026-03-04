const user = await db
  .selectFrom('users')
  .selectAll()
  .where('name', '=', 'Alice')
  .executeTakeFirst()
