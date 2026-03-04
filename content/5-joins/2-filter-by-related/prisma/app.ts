// Posts by author name
const posts = await prisma.post.findMany({
  where: { author: { name: "Alice" } },
});

// Users who have at least one post
const users = await prisma.user.findMany({
  where: { posts: { some: {} } },
});
