import { Op, col, fn, where } from "sequelize";

const users = await User.findAll({
  attributes: [
    "name",
    [fn("COUNT", col("posts.id")), "postCount"],
  ],
  include: [{ model: Post, as: "posts", attributes: [], required: true }],
  group: ["User.id", "User.name"],
  having: where(fn("COUNT", col("posts.id")), Op.gt, 5),
});
