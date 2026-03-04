const result = await db.select({
  name: users.name,
  email: users.email,
}).from(users);
