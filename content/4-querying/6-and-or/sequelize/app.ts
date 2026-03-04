import { Op } from "sequelize";

// AND
const users = await User.findAll({
  where: {
    name: "Alice",
    email: { [Op.like]: "%@example.com" },
  },
});

// OR
const users2 = await User.findAll({
  where: {
    [Op.or]: [{ name: "Alice" }, { name: "Bob" }],
  },
});
