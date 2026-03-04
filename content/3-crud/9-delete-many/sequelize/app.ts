import { Op } from "sequelize";

await User.destroy({
  where: {
    email: { [Op.like]: "%@old-domain.com" },
  },
});
