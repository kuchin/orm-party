const users = await User.findAll({
  attributes: ["name", "email"],
});
