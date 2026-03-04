import { col, fn } from "sequelize";

const average = await Order.avg("amount");

// Average per user
const perUser = await Order.findAll({
  attributes: [
    [col("user_id"), "userId"],
    [fn("AVG", col("amount")), "avg"],
  ],
  group: ["user_id"],
});
