const result = await prisma.order.groupBy({
  by: ["userId"],
  _sum: { amount: true },
  having: {
    amount: { _sum: { gt: 1000 } },
  },
});
