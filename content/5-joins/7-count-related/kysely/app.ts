import { sql } from 'kysely'

const users = await db
  .selectFrom('users as u')
  .innerJoin('posts as p', 'p.author_id', 'u.id')
  .select([
    'u.name',
    sql<number>`count(p.id)`.as('post_count'),
  ])
  .groupBy(['u.id', 'u.name'])
  .having(sql`count(p.id)`, '>', 5)
  .execute()
