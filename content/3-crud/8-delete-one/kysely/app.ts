await db
  .deleteFrom('users')
  .where('id', '=', 1)
  .executeTakeFirst()
