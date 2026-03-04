const users = await db
  .selectFrom('users')
  .select(['name', 'email'])
  .execute()
