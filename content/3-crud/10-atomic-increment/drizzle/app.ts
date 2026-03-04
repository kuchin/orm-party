import { eq, sql } from "drizzle-orm";

await db
  .update(users)
  .set({ views: sql`${users.views} + 1` })
  .where(eq(users.id, 1));
