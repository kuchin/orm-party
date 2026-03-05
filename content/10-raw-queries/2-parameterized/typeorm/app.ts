const users = await dataSource.query(
  `SELECT id, name, email FROM users
   WHERE age > $1 AND city = $2`,
  [25, "NYC"]
);
