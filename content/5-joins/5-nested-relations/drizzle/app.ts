const result = await db.query.posts.findMany({
  with: {
    author: true,
    tags: true,
  },
});
