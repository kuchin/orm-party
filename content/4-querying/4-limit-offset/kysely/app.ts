const users = await db
  .selectFrom('users')
  .selectAll()
  .orderBy('created_at', 'desc')
  .offset(20)
  .limit(10)
  .execute()
