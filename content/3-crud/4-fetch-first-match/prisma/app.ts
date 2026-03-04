const user = await prisma.user.findFirst({
  where: { name: "Alice" },
});
