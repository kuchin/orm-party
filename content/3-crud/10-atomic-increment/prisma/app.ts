await prisma.user.update({
  where: { id: 1 },
  data: {
    views: { increment: 1 },
  },
});
