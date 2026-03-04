const rows = await orm.em.getConnection().execute(
  `SELECT id, name, email FROM users
   WHERE created_at > '2024-01-01'`,
);
