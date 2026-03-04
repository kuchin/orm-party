// Greater than
const users = await prisma.user.findMany({
  where: { createdAt: { gt: new Date("2024-01-01") } },
});

// Less than or equal
const users2 = await prisma.user.findMany({
  where: { id: { lte: 100 } },
});

// Not equal
const users3 = await prisma.user.findMany({
  where: { name: { not: "Alice" } },
});

// Between
const users4 = await prisma.user.findMany({
  where: {
    createdAt: {
      gte: new Date("2024-01-01"),
      lte: new Date("2024-12-31"),
    },
  },
});
