// Alternative: use _count + filter in app code
// (not DB-equivalent, filters in JS)
const users = await prisma.user.findMany({
  include: {
    _count: { select: { posts: true } },
  },
});

const active = users.filter(
  (u) => u._count.posts > 5
);
