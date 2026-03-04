await db.update(users)
  .set({ name: "Alice Smith" })
  .where(eq(users.name, "Alice"));
