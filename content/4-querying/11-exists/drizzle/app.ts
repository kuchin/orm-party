import { sql, eq } from "drizzle-orm";

const [row] = await db
  .select({ value: sql`1` })
  .from(users)
  .where(eq(users.email, "alice@example.com"))
  .limit(1);
const exists = !!row;
