const [rows] = await sequelize.query(
  `SELECT id, name, email FROM users
   WHERE age > :age AND city = :city`,
  {
    replacements: { age: 25, city: "NYC" },
  },
);
