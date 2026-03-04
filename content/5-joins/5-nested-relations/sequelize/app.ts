// Fetch posts with author and tags
const posts = await Post.findAll({
  include: [
    { model: User, as: "author" },
    { model: Tag, as: "tags" },
  ],
});
for (const post of posts) {
  console.log(post.author?.name, post.tags?.map((t) => t.name));
}
