const result = await db
  .select({ name: users.name, title: posts.title })
  .from(users)
  .leftJoin(posts, eq(posts.authorId, users.id));
