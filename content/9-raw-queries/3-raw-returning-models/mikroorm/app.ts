const rows = await orm.em.getConnection().execute(
  "SELECT * FROM users WHERE age > ?",
  [25],
);

const users = rows.map((row) => orm.em.map(User, row));
// Returns User entity instances
