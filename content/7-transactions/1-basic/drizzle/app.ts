await db.transaction(async (tx) => {
  const [user] = await tx.insert(users)
    .values({ name: "Alice", email: "alice@example.com" })
    .returning();
  await tx.update(accounts)
    .set({ balance: sql`${accounts.balance} - 100` })
    .where(eq(accounts.userId, user.id));
});
