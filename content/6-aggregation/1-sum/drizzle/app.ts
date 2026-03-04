// Total of all order amounts
const result = await db.select({
  total: sum(orders.amount),
}).from(orders);

// Total per user
const perUser = await db.select({
  userId: orders.userId,
  total: sum(orders.amount),
})
  .from(orders)
  .groupBy(orders.userId);
