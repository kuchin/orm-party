// Posts by author name
const posts = await postRepository
  .createQueryBuilder("post")
  .innerJoinAndSelect("post.author", "author")
  .where("author.name = :name", { name: "Alice" })
  .getMany();

// Users who have at least one post
const users = await userRepository
  .createQueryBuilder("user")
  .innerJoin("user.posts", "post")
  .getMany();
