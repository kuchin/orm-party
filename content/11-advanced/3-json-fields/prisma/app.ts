// schema: metadata Json

// Store JSON
await prisma.user.update({
  where: { id: 1 },
  data: {
    metadata: { theme: "dark", lang: "en" },
  },
});

// Query JSON field
const users = await prisma.user.findMany({
  where: {
    metadata: {
      path: ["theme"],
      equals: "dark",
    },
  },
});
