// Kysely doesn't hydrate relation graphs; fetch separately.
const user = await db
  .selectFrom('users')
  .selectAll()
  .where('id', '=', 1)
  .executeTakeFirst()

const posts = await db
  .selectFrom('posts')
  .selectAll()
  .where('author_id', '=', 1)
  .execute()

// Fetch posts with author in one query (JOIN)
const postsWithAuthor = await db
  .selectFrom('posts as p')
  .innerJoin('users as u', 'u.id', 'p.author_id')
  .select(['p.title', 'u.name as author_name'])
  .execute()
