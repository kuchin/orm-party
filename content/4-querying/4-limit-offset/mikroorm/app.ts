const em = orm.em.fork();

const users = await em.find(User, {}, {
  orderBy: { createdAt: "desc" },
  offset: 20,
  limit: 10,
});
