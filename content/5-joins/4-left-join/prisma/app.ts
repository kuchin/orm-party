// include acts like a left join — returns users even without posts
const users = await prisma.user.findMany({
  include: { posts: true },
});

// users without posts have posts: []
