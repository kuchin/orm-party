const result = await db.selectDistinct({ name: users.name })
  .from(users);
