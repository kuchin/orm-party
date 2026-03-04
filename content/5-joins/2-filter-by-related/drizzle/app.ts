// Posts by author name
const result = await db.select()
  .from(posts)
  .innerJoin(users, eq(posts.authorId, users.id))
  .where(eq(users.name, "Alice"));

// Users who have at least one post
const result2 = await db.selectDistinct({ id: users.id, name: users.name })
  .from(users)
  .innerJoin(posts, eq(posts.authorId, users.id));
