// query() returns plain objects;
// map to entities manually
const raw = await dataSource.query(
  "SELECT * FROM users WHERE age > $1",
  [25]
);
const users = raw.map((row) =>
  Object.assign(new User(), row)
);
