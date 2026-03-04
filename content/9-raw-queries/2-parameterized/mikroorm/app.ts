const rows = await orm.em.getConnection().execute(
  `SELECT id, name, email FROM users
   WHERE age > ? AND city = ?`,
  [25, "NYC"],
);
