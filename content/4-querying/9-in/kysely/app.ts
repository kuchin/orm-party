const users = await db
  .selectFrom('users')
  .selectAll()
  .where('name', 'in', ['Alice', 'Bob', 'Charlie'])
  .execute()

// NOT IN
const users2 = await db
  .selectFrom('users')
  .selectAll()
  .where((eb) => eb.not(eb('name', 'in', ['Alice', 'Bob'])))
  .execute()
