import { sql } from "drizzle-orm";

const age = 25;
const city = "NYC";

const users = await db.execute(
  sql`SELECT id, name, email FROM users
      WHERE age > ${age} AND city = ${city}`
);
