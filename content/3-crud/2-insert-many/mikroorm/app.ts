const em = orm.em.fork();

const users = em.create(User, [
  { name: "Alice", email: "alice@example.com" },
  { name: "Bob", email: "bob@example.com" },
  { name: "Charlie", email: "charlie@example.com" },
]);
await em.persistAndFlush(users);
