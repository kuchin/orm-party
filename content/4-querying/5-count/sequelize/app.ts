const count = await User.count({
  where: { name: "Alice" },
});
