const users = await db
  .insertInto('users')
  .values([
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
    { name: 'Charlie', email: 'charlie@example.com' },
  ])
  .returningAll()
  .execute()
