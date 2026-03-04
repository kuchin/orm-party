const users = await prisma.user.findMany({
  select: { name: true, email: true },
});
