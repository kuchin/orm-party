const result = await db.select()
  .from(users)
  .where(inArray(users.name, ["Alice", "Bob", "Charlie"]));

// NOT IN
const result2 = await db.select()
  .from(users)
  .where(notInArray(users.name, ["Alice", "Bob"]));
