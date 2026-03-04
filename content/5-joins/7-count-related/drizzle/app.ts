const result = await db
  .select({
    name: users.name,
    postCount: count(posts.id),
  })
  .from(users)
  .innerJoin(posts, eq(posts.authorId, users.id))
  .groupBy(users.id, users.name)
  .having(gt(count(posts.id), 5));
