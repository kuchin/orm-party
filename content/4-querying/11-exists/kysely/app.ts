const result = await db
  .selectNoFrom((eb) => [
    eb.exists(
      db
        .selectFrom('users')
        .select('id')
        .where('email', '=', 'alice@example.com')
    ).as('exists'),
  ])
  .executeTakeFirst()

const exists = result?.exists ?? false
