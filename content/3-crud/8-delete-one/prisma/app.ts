await prisma.user.delete({
  where: { id: 1 },
});
