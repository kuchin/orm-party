// Sequelize uses include + required for INNER JOIN
const posts = await Post.findAll({
  attributes: ["title"],
  include: [
    {
      model: User,
      as: "author",
      attributes: ["name"],
      required: true,
    },
  ],
});
