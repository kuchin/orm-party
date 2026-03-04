const em = orm.em.fork();

const users = await em.find(User, {
  name: { $in: ["Alice", "Bob", "Charlie"] },
});

// NOT IN
const users2 = await em.find(User, {
  name: { $nin: ["Alice", "Bob"] },
});
