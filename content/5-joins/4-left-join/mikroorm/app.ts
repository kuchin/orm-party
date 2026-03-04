// populate uses separate query (LEFT JOIN behavior)
const users = await orm.em.find(User, {}, {
  populate: ["posts"],
});
for (const user of users) {
  const posts = user.posts; // empty collection if no posts
}
