// Greater than
const users = await db
  .selectFrom('users')
  .selectAll()
  .where('created_at', '>', new Date('2024-01-01'))
  .execute()

// Less than or equal
const users2 = await db
  .selectFrom('users')
  .selectAll()
  .where('id', '<=', 100)
  .execute()

// Not equal
const users3 = await db
  .selectFrom('users')
  .selectAll()
  .where('name', '!=', 'Alice')
  .execute()

// Between
const users4 = await db
  .selectFrom('users')
  .selectAll()
  .where('created_at', '>=', new Date('2024-01-01'))
  .where('created_at', '<=', new Date('2024-12-31'))
  .execute()
