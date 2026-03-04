// Contains
const users = await prisma.user.findMany({
  where: { name: { contains: "ali" } },
});

// Starts with
const users2 = await prisma.user.findMany({
  where: { name: { startsWith: "Ali" } },
});

// Case-insensitive
const users3 = await prisma.user.findMany({
  where: { name: { contains: "ali", mode: "insensitive" } },
});
