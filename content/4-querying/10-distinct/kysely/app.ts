const names = await db
  .selectFrom('users')
  .select('name')
  .distinct()
  .execute()
