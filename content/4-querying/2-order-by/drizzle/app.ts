const result = await db.select()
  .from(users)
  .orderBy(desc(users.createdAt));
