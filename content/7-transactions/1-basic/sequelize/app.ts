await sequelize.transaction(async (tx) => {
  const user = await User.create(
    { name: "Alice", email: "alice@example.com" },
    { transaction: tx },
  );

  await Account.decrement("balance", {
    by: 100,
    where: { userId: user.id },
    transaction: tx,
  });
});
