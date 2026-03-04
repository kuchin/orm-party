const result = await db.select({ count: count() })
  .from(users)
  .where(eq(users.name, "Alice"));

const total = result[0].count;
