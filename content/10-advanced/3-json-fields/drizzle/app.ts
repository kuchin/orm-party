import { eq, sql } from "drizzle-orm";

// schema: metadata: jsonb("metadata")

// Store JSON
await db
  .update(users)
  .set({ metadata: { theme: "dark", lang: "en" } })
  .where(eq(users.id, 1));

// Query JSON field
const result = await db
  .select()
  .from(users)
  .where(
    sql`${users.metadata}->>'theme' = 'dark'`
  );

// Nested JSON
const result2 = await db
  .select()
  .from(users)
  .where(
    sql`${users.metadata}->'address'->>'city' = 'NYC'`
  );
