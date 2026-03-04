await User.increment("views", {
  by: 1,
  where: { id: 1 },
});
