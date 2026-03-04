await db.insert(users).values({
  name: "Alice Smith",
  email: "alice@example.com",
}).onConflictDoUpdate({
  target: users.email,
  set: { name: "Alice Smith" },
});
