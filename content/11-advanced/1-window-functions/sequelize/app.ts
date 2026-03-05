import { literal } from "sequelize";

const orders = await Order.findAll({
  attributes: [
    "name",
    "amount",
    [
      literal('ROW_NUMBER() OVER (ORDER BY "amount" DESC)'),
      "rank",
    ],
  ],
  raw: true,
});
