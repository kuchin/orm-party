const users = await db
  .selectFrom('users')
  .selectAll()
  .orderBy('created_at', 'desc')
  .execute()
