const em = orm.em.fork();

// Contains
const users = await em.find(User, {
  name: { $like: "%ali%" },
});

// Starts with
const users2 = await em.find(User, {
  name: { $like: "Ali%" },
});

// Case-insensitive
const users3 = await em.find(User, {
  name: { $ilike: "%ali%" },
});
