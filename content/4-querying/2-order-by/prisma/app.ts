const users = await prisma.user.findMany({
  orderBy: { createdAt: "desc" },
});
