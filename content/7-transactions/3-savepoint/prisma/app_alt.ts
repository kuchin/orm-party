// Alternative: sequential transactions
// (no true savepoint, but partial rollback effect)
const order = await prisma.$transaction(async (tx) => {
  return tx.order.create({
    data: { userId: 1, amount: 100 },
  });
});

try {
  await prisma.$transaction(async (tx) => {
    await tx.orderItem.create({
      data: { orderId: order.id, productId: 42 },
    });
  });
} catch {
  // order persists, only item insert failed
}
