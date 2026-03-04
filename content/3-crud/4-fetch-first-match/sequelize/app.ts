const user = await User.findOne({
  where: { name: "Alice" },
});
