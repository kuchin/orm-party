try {
  await db.transaction(async (tx) => {
    await tx.update(accounts)
      .set({ balance: sql`${accounts.balance} - 100` })
      .where(eq(accounts.userId, 1));
    await tx.update(accounts)
      .set({ balance: sql`${accounts.balance} + 100` })
      .where(eq(accounts.userId, 2));
    if (errorCondition) {
      tx.rollback();
    }
  });
} catch (e) {
  // transaction rolled back
}
