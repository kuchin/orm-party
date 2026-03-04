// Greater than
const result = await db.select()
  .from(users)
  .where(gt(users.createdAt, new Date("2024-01-01")));

// Less than or equal
const result2 = await db.select()
  .from(users)
  .where(lte(users.id, 100));

// Not equal
const result3 = await db.select()
  .from(users)
  .where(ne(users.name, "Alice"));

// Between
const result4 = await db.select()
  .from(users)
  .where(between(
    users.createdAt,
    new Date("2024-01-01"),
    new Date("2024-12-31")
  ));
