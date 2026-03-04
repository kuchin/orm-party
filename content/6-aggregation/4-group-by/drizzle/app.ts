const month = sql`DATE_TRUNC('month', ${orders.createdAt})`;

const result = await db.select({
  month,
  orderCount: count(),
  total: sum(orders.amount),
})
  .from(orders)
  .groupBy(month)
  .orderBy(month);
