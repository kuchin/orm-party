import { Op, col, fn, where } from "sequelize";

const users = await Order.findAll({
  attributes: [
    [col("user_id"), "userId"],
    [fn("SUM", col("amount")), "total"],
  ],
  group: ["user_id"],
  having: where(fn("SUM", col("amount")), Op.gt, 1000),
});
