const user = await db
  .insertInto('users')
  .values({
    name: 'Alice',
    email: 'alice@example.com',
  })
  .returningAll()
  .executeTakeFirst()
