import { col, fn } from "sequelize";

const names = await User.findAll({
  attributes: [[fn("DISTINCT", col("name")), "name"]],
});
