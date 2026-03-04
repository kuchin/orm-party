const user = await prisma.user.upsert({
  where: { email: "alice@example.com" },
  update: { name: "Alice Smith" },
  create: { name: "Alice Smith", email: "alice@example.com" },
});
