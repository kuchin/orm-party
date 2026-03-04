const users = await prisma.user.findMany({
  where: { name: { in: ["Alice", "Bob", "Charlie"] } },
});

// NOT IN
const users2 = await prisma.user.findMany({
  where: { name: { notIn: ["Alice", "Bob"] } },
});
