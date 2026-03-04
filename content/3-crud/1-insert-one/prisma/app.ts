const user = await prisma.user.create({
  data: {
    name: "Alice",
    email: "alice@example.com",
  },
});
