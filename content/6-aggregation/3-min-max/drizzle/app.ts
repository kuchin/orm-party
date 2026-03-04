const result = await db.select({
  smallest: min(orders.amount),
  largest: max(orders.amount),
}).from(orders);

// Per user
const perUser = await db.select({
  userId: orders.userId,
  smallest: min(orders.amount),
  largest: max(orders.amount),
})
  .from(orders)
  .groupBy(orders.userId);
