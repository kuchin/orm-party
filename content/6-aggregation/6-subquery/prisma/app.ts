// Prisma doesn't support subqueries natively;
// split into two queries
const avg = await prisma.order.aggregate({
  _avg: { amount: true },
});

const users = await prisma.user.findMany({
  where: {
    orders: {
      some: { amount: { gt: avg._avg.amount! } },
    },
  },
});
