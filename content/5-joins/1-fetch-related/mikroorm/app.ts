const em = orm.em.fork();

// Prefetch related posts for a user
const user = await em.findOne(User, { id: 1 }, {
  populate: ["posts"],
});
for (const post of user?.posts ?? []) {
  console.log(post.title);
}

// Select related author for posts (ForeignKey)
const posts = await em.find(Post, {}, {
  populate: ["author"],
});
