const em = orm.em.fork();

const user = em.create(User, {
  name: "Alice",
  email: "alice@example.com",
});
await em.persistAndFlush(user);
