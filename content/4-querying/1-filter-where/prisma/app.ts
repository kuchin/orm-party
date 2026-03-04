const users = await prisma.user.findMany({
  where: { name: "Alice" },
});
