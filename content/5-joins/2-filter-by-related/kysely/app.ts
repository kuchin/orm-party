// Posts by author name (spanning relationships)
const posts = await db
  .selectFrom('posts as p')
  .innerJoin('users as u', 'u.id', 'p.author_id')
  .selectAll('p')
  .where('u.name', '=', 'Alice')
  .execute()

// Users who have at least one post
const users = await db
  .selectFrom('users as u')
  .innerJoin('posts as p', 'p.author_id', 'u.id')
  .selectAll('u')
  .distinct()
  .execute()
