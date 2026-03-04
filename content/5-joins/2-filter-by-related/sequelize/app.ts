// Posts by author name (spanning relationships)
const posts = await Post.findAll({
  include: [
    {
      model: User,
      as: "author",
      where: { name: "Alice" },
    },
  ],
});

// Users who have at least one post
const users = await User.findAll({
  include: [{ model: Post, as: "posts", required: true }],
  distinct: true,
});
