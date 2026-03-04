const em = orm.em.fork();

await em.nativeUpdate(User, { name: "Alice" }, {
  name: "Alice Smith",
});
