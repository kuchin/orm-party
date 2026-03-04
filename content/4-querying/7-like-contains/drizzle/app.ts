// Contains
const result = await db.select()
  .from(users)
  .where(like(users.name, "%ali%"));

// Starts with
const result2 = await db.select()
  .from(users)
  .where(like(users.name, "Ali%"));

// Case-insensitive
const result3 = await db.select()
  .from(users)
  .where(ilike(users.name, "%ali%"));
