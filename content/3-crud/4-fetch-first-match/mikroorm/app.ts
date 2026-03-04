const em = orm.em.fork();

const user = await em.findOne(User, { name: "Alice" });
