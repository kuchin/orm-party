// Total of all order amounts
const result = await prisma.order.aggregate({
  _sum: { amount: true },
});
const total = result._sum.amount;

// Total per user
const perUser = await prisma.order.groupBy({
  by: ["userId"],
  _sum: { amount: true },
});
