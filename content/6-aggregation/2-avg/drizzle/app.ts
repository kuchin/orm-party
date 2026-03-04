const result = await db.select({
  average: avg(orders.amount),
}).from(orders);

// Average per user
const perUser = await db.select({
  userId: orders.userId,
  average: avg(orders.amount),
})
  .from(orders)
  .groupBy(orders.userId);
