// AND
const users = await db
  .selectFrom('users')
  .selectAll()
  .where((eb) =>
    eb.and([
      eb('name', '=', 'Alice'),
      eb('email', 'like', '%@example.com'),
    ])
  )
  .execute()

// OR
const users2 = await db
  .selectFrom('users')
  .selectAll()
  .where((eb) =>
    eb.or([
      eb('name', '=', 'Alice'),
      eb('name', '=', 'Bob'),
    ])
  )
  .execute()
