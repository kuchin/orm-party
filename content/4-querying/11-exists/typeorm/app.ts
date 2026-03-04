const exists = await dataSource
  .getRepository(User)
  .existsBy({ email: "alice@example.com" });
