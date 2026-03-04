await db
  .deleteFrom('users')
  .where('email', 'like', '%@old-domain.com')
  .execute()
