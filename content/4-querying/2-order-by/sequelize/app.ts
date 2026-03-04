const users = await User.findAll({
  order: [["createdAt", "DESC"]],
});
