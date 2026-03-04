// AND (implicit)
const users = await prisma.user.findMany({
  where: {
    name: "Alice",
    email: { endsWith: "@example.com" },
  },
});

// OR
const users2 = await prisma.user.findMany({
  where: {
    OR: [{ name: "Alice" }, { name: "Bob" }],
  },
});
