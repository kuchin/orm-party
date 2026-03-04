await dataSource.transaction(async (manager) => {
  const user = manager.create(User, {
    name: "Alice",
    email: "alice@example.com",
  });
  await manager.save(user);
  await manager.update(Account, { userId: user.id }, {
    balance: () => "balance - 100",
  });
});
