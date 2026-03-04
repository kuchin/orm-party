// Contains
const users = await db
  .selectFrom('users')
  .selectAll()
  .where('name', 'like', '%ali%')
  .execute()

// Starts with
const users2 = await db
  .selectFrom('users')
  .selectAll()
  .where('name', 'like', 'Ali%')
  .execute()

// Case-insensitive
const users3 = await db
  .selectFrom('users')
  .selectAll()
  .where('name', 'ilike', '%ali%')
  .execute()
