// Include related posts
const user = await prisma.user.findUnique({
  where: { id: 1 },
  include: { posts: true },
});

// Include author on posts
const posts = await prisma.post.findMany({
  include: { author: true },
});
