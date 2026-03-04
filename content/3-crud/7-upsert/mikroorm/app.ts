const em = orm.em.fork();

const user = await em.upsert(User, {
  name: "Alice Smith",
  email: "alice@example.com",
});
