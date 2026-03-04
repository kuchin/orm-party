const result = await prisma.order.aggregate({
  _min: { amount: true },
  _max: { amount: true },
});

// Per user
const perUser = await prisma.order.groupBy({
  by: ["userId"],
  _min: { amount: true },
  _max: { amount: true },
});
