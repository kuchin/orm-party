const result = await prisma.order.aggregate({
  _avg: { amount: true },
});
const average = result._avg.amount;

// Average per user
const perUser = await prisma.order.groupBy({
  by: ["userId"],
  _avg: { amount: true },
});
