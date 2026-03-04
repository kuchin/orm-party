const result = await db.select({
  userId: orders.userId,
  total: sum(orders.amount),
})
  .from(orders)
  .groupBy(orders.userId)
  .having(gt(sum(orders.amount), 1000));
