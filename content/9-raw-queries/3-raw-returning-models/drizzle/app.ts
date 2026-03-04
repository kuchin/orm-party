// Alternative: no built-in raw-to-schema mapping;
// Drizzle returns typed rows from query builder
import { gt } from "drizzle-orm";

const result = await db
  .select()
  .from(users)
  .where(gt(users.age, 25));
// Returns typed rows matching schema
