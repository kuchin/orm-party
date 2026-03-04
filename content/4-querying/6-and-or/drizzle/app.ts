// AND
const result = await db.select()
  .from(users)
  .where(and(
    eq(users.name, "Alice"),
    like(users.email, "%@example.com")
  ));

// OR
const result2 = await db.select()
  .from(users)
  .where(or(
    eq(users.name, "Alice"),
    eq(users.name, "Bob")
  ));
