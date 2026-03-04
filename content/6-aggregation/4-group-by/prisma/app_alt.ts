// Alternative: groupBy with model fields
// (no date expressions)
const perUser = await prisma.order.groupBy({
  by: ["userId"],
  _count: { id: true },
  _sum: { amount: true },
});
