import { col, fn } from "sequelize";

const users = await User.findAll({
  attributes: [
    "name",
    [fn("COUNT", col("posts.id")), "postCount"],
  ],
  include: [{ model: Post, as: "posts", attributes: [], required: false }],
  group: ["User.id", "User.name"],
  order: [[fn("COUNT", col("posts.id")), "DESC"]],
});
