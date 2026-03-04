const em = orm.em.fork();

const users = await em.find(User, {
  name: "Alice",
});
