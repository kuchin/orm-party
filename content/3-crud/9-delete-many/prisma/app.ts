await prisma.user.deleteMany({
  where: {
    email: { contains: "@old-domain.com" },
  },
});
