const count = await prisma.user.count({
  where: { name: "Alice" },
});
