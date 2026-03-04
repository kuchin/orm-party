import { Op, col, where } from "sequelize";

const products = await Product.findAll({
  where: where(col("sale_price"), Op.lt, col("original_price")),
});
