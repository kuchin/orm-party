const em = orm.em.fork();

const count = await em.count(User, {
  name: "Alice",
});
