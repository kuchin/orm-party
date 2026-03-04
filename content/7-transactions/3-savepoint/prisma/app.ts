// No first-class savepoint API in Prisma Client;
// use raw SQL for true savepoints
await prisma.$transaction(async (tx) => {
  const order = await tx.order.create({
    data: { userId: 1, amount: 100 },
  });

  await tx.$executeRaw`SAVEPOINT sp1`;
  try {
    await tx.orderItem.create({
      data: { orderId: order.id, productId: 42 },
    });
  } catch {
    await tx.$executeRaw`ROLLBACK TO sp1`;
  }
});
