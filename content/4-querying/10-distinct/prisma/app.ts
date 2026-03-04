const names = await prisma.user.findMany({
  distinct: ["name"],
  select: { name: true },
});
