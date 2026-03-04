import { Op, literal } from "sequelize";

const users = await User.findAll({
  where: {
    id: {
      [Op.in]: literal(`(
        SELECT user_id FROM orders
        WHERE amount > (
          SELECT AVG(amount) FROM orders
        )
      )`),
    },
  },
});
