import { col, fn } from "sequelize";

// Total of all order amounts
const total = await Order.sum("amount");

// Total per user
const perUser = await Order.findAll({
  attributes: [
    [col("user_id"), "userId"],
    [fn("SUM", col("amount")), "total"],
  ],
  group: ["user_id"],
});
