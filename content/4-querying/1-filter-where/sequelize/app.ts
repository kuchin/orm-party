const users = await User.findAll({
  where: { name: "Alice" },
});
