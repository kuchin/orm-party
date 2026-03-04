// Drizzle has no savepoint API;
// use raw SQL within a transaction
await db.transaction(async (tx) => {
  const [order] = await tx.insert(orders)
    .values({ userId: 1, amount: 100 })
    .returning();

  try {
    await tx.execute(sql`SAVEPOINT sp1`);
    await tx.insert(orderItems)
      .values({ orderId: order.id, productId: 42 });
  } catch {
    await tx.execute(sql`ROLLBACK TO sp1`);
  }
});
