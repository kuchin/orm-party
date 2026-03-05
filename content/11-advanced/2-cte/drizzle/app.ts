import { sql, eq } from "drizzle-orm";

const highValue = db.$with("high_value").as(
  db
    .select({
      userId: orders.userId,
      total: sql<number>`SUM(${orders.amount})`
        .as("total"),
    })
    .from(orders)
    .groupBy(orders.userId)
    .having(sql`SUM(${orders.amount}) > 1000`)
);

const result = await db
  .with(highValue)
  .select({
    name: users.name,
    total: highValue.total,
  })
  .from(users)
  .innerJoin(
    highValue, eq(users.id, highValue.userId)
  );
