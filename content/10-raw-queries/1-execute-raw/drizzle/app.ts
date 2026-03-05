import { sql } from "drizzle-orm";

const users = await db.execute(
  sql`SELECT id, name, email FROM users
      WHERE created_at > '2024-01-01'`
);
