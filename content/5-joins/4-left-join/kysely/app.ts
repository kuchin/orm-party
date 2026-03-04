const users = await db
  .selectFrom('users as u')
  .leftJoin('posts as p', 'p.author_id', 'u.id')
  .select(['u.name', 'p.title'])
  .execute()
