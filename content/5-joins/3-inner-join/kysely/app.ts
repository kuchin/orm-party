const posts = await db
  .selectFrom('posts as p')
  .innerJoin('users as u', 'u.id', 'p.author_id')
  .select(['u.name as author_name', 'p.title'])
  .execute()
