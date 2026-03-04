await prisma.user.updateMany({
  where: { name: "Alice" },
  data: { name: "Alice Smith" },
});
