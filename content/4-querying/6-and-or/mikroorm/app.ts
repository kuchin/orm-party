const em = orm.em.fork();

// AND
const users = await em.find(User, {
  $and: [
    { name: "Alice" },
    { email: { $like: "%@example.com" } },
  ],
});

// OR
const users2 = await em.find(User, {
  $or: [
    { name: "Alice" },
    { name: "Bob" },
  ],
});
