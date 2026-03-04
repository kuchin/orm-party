// Fetch posts with author and tags
const posts = await orm.em.find(Post, {}, {
  populate: ["author", "tags"],
});
for (const post of posts) {
  console.log(
    post.author.name,
    post.tags.getItems().map((t) => t.name),
  );
}
