const users = await prisma.user.findMany({
  orderBy: { createdAt: "desc" },
  take: 10,
  skip: 20,
});
