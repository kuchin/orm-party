const result = await db
  .select({
    name: users.name,
    postCount: count(posts.id),
  })
  .from(users)
  .leftJoin(posts, eq(posts.authorId, users.id))
  .groupBy(users.id, users.name)
  .orderBy(desc(count(posts.id)));
