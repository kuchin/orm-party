import { sql } from 'kysely'

const results = await db
  .selectFrom('articles')
  .selectAll()
  .where(
    sql<boolean>`to_tsvector('english', title || ' ' || body) @@ plainto_tsquery('english', ${'database optimization'})`
  )
  .execute()
