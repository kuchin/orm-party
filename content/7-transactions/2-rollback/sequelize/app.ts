try {
  await sequelize.transaction(async (tx) => {
    await Account.decrement("balance", {
      by: 100,
      where: { userId: 1 },
      transaction: tx,
    });

    await Account.increment("balance", {
      by: 100,
      where: { userId: 2 },
      transaction: tx,
    });

    if (error_condition) {
      throw new Error("Transfer failed");
    }
  });
} catch {
  // transaction rolled back automatically
}
