import { col, fn, literal } from "sequelize";

// Orders per month
const perMonth = await Order.findAll({
  attributes: [
    [fn("DATE_TRUNC", "month", col("created_at")), "month"],
    [fn("COUNT", col("id")), "orderCount"],
    [fn("SUM", col("amount")), "total"],
  ],
  group: [literal(`DATE_TRUNC('month', "created_at")`)],
  order: [[literal(`DATE_TRUNC('month', "created_at")`), "ASC"]],
});
