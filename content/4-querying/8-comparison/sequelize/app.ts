import { Op } from "sequelize";

// Greater than
const users = await User.findAll({
  where: {
    createdAt: { [Op.gt]: new Date("2024-01-01") },
  },
});

// Less than or equal
const users2 = await User.findAll({
  where: {
    id: { [Op.lte]: 100 },
  },
});

// Not equal
const users3 = await User.findAll({
  where: {
    name: { [Op.ne]: "Alice" },
  },
});

// Between
const users4 = await User.findAll({
  where: {
    createdAt: {
      [Op.between]: [new Date("2024-01-01"), new Date("2024-12-31")],
    },
  },
});
