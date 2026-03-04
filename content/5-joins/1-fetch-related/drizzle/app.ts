// Using relational queries (requires relations defined)
const user = await db.query.users.findFirst({
  where: eq(users.id, 1),
  with: { posts: true },
});

// Manual join
const result = await db.select()
  .from(posts)
  .leftJoin(users, eq(posts.authorId, users.id));
