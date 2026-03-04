const posts = await prisma.post.findMany({
  include: {
    author: true,
    tags: true,
  },
});
