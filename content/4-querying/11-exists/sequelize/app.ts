const exists =
  (await User.count({
    where: { email: "alice@example.com" },
    limit: 1,
  })) > 0;
