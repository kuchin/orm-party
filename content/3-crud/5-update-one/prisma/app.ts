const user = await prisma.user.update({
  where: { id: 1 },
  data: { email: "newalice@example.com" },
});
