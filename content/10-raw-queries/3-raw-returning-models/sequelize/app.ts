// query() can map rows back to model instances
const users = await sequelize.query(
  "SELECT * FROM users WHERE age > :age",
  {
    replacements: { age: 25 },
    model: User,
    mapToModel: true,
  },
);
for (const user of users) {
  console.log(user.name); // User instance
}
