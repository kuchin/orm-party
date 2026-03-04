import { Op } from "sequelize";

// Contains
const users = await User.findAll({
  where: { name: { [Op.like]: "%ali%" } },
});

// Starts with
const users2 = await User.findAll({
  where: { name: { [Op.like]: "Ali%" } },
});

// Case-insensitive
const users3 = await User.findAll({
  where: { name: { [Op.iLike]: "%ali%" } },
});
