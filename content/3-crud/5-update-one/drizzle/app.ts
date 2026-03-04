await db.update(users)
  .set({ email: "newalice@example.com" })
  .where(eq(users.id, 1));
