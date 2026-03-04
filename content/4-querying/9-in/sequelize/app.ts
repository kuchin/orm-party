import { Op } from "sequelize";

const users = await User.findAll({
  where: {
    name: { [Op.in]: ["Alice", "Bob", "Charlie"] },
  },
});

// NOT IN
const users2 = await User.findAll({
  where: {
    name: { [Op.notIn]: ["Alice", "Bob"] },
  },
});
