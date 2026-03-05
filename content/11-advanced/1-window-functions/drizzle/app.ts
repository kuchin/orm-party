import { sql } from "drizzle-orm";

const result = await db
  .select({
    name: orders.name,
    amount: orders.amount,
    rank: sql<number>`ROW_NUMBER() OVER (
      ORDER BY ${orders.amount} DESC
    )`,
  })
  .from(orders);
