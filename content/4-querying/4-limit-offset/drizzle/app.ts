const result = await db.select()
  .from(users)
  .orderBy(desc(users.createdAt))
  .limit(10)
  .offset(20);
