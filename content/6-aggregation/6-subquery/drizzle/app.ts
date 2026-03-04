const avgAmount = db.select({
  value: avg(orders.amount),
}).from(orders);

const aboveAvgUsers = db.selectDistinct({
  userId: orders.userId,
})
  .from(orders)
  .where(gt(orders.amount, avgAmount));

const result = await db.select()
  .from(users)
  .where(inArray(users.id, aboveAvgUsers));
