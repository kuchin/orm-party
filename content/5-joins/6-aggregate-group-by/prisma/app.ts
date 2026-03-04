const postCounts = await prisma.post.groupBy({
  by: ["authorId"],
  _count: { id: true },
  orderBy: { _count: { id: "desc" } },
});

// Fetch user names for the results
const users = await prisma.user.findMany({
  where: { id: { in: postCounts.map((p) => p.authorId) } },
});
