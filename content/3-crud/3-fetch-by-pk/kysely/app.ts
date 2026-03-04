const user = await db
  .selectFrom('users')
  .selectAll()
  .where('id', '=', 1)
  .executeTakeFirst()
