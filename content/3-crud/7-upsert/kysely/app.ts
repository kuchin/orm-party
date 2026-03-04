await db
  .insertInto('users')
  .values({
    name: 'Alice Smith',
    email: 'alice@example.com',
  })
  .onConflict((oc) =>
    oc.column('email').doUpdateSet({ name: 'Alice Smith' })
  )
  .executeTakeFirst()
