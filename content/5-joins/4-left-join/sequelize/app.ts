// include with required=false behaves like LEFT JOIN
const users = await User.findAll({
  include: [{ model: Post, as: "posts", required: false }],
});
for (const user of users) {
  const posts = user.posts ?? []; // empty array if no posts
}
