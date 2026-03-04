await User.update(
  { name: "Alice Smith" },
  { where: { name: "Alice" } },
);
