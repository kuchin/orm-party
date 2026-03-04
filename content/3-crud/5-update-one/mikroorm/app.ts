const em = orm.em.fork();

await em.nativeUpdate(User, { id: 1 }, {
  email: "newalice@example.com",
});
