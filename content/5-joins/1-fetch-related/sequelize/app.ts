// Prefetch related posts for a user
const user = await User.findByPk(1, {
  include: [{ model: Post, as: "posts" }],
});
for (const post of user?.posts ?? []) {
  console.log(post.title);
}

// Select related author for posts (ForeignKey)
const posts = await Post.findAll({
  include: [{ model: User, as: "author" }],
});
