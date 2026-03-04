// Greater than
const users = await orm.em.find(User, {
  createdAt: { $gt: new Date("2024-01-01") },
});

// Less than or equal
const users2 = await orm.em.find(User, {
  id: { $lte: 100 },
});

// Not equal
const users3 = await orm.em.find(User, {
  name: { $ne: "Alice" },
});

// Between
const users4 = await orm.em.find(User, {
  createdAt: {
    $gte: new Date("2024-01-01"),
    $lte: new Date("2024-12-31"),
  },
});
