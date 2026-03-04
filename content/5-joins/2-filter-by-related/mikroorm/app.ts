const em = orm.em.fork();

// Posts by author name (spanning relationships)
const posts = await em.find(Post, {
  author: { name: "Alice" },
}, {
  populate: ["author"],
});

// Users who have at least one post
const users = await em
  .createQueryBuilder(User, "u")
  .select("u.*")
  .join("u.posts", "p")
  .groupBy("u.id")
  .getResultList();
