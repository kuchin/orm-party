const user = await orm.em.findOne(User, {
  email: "alice@example.com",
}, {
  fields: ["id"],
});

const exists = user !== null;
