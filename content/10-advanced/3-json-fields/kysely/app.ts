import { sql } from 'kysely'

// Store JSON
await db
  .updateTable('users')
  .set({
    metadata: sql`'{"theme":"dark","lang":"en"}'::jsonb`,
  })
  .where('id', '=', 1)
  .executeTakeFirst()

// Query JSON field
const users = await db
  .selectFrom('users')
  .selectAll()
  .where(sql`metadata->>'theme'`, '=', 'dark')
  .execute()

// Nested JSON
const users2 = await db
  .selectFrom('users')
  .selectAll()
  .where(sql`metadata->'address'->>'city'`, '=', 'NYC')
  .execute()
