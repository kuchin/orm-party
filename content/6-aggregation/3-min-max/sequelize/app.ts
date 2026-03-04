import { col, fn } from "sequelize";

const result = {
  smallest: await Order.min("amount"),
  largest: await Order.max("amount"),
};

// Per user
const perUser = await Order.findAll({
  attributes: [
    [col("user_id"), "userId"],
    [fn("MIN", col("amount")), "smallest"],
    [fn("MAX", col("amount")), "largest"],
  ],
  group: ["user_id"],
});
