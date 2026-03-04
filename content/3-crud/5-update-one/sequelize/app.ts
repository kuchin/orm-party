await User.update(
  { email: "newalice@example.com" },
  { where: { id: 1 } },
);
