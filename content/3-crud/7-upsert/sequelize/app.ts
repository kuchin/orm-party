const [user, created] = await User.upsert({
  name: "Alice Smith",
  email: "alice@example.com",
});
