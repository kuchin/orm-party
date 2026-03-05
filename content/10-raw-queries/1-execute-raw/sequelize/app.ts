const [rows] = await sequelize.query(`
  SELECT id, name, email
  FROM users
  WHERE created_at > '2024-01-01'
`);
