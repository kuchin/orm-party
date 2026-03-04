const result = await userRepository
  .createQueryBuilder("user")
  .innerJoinAndSelect("user.posts", "post")
  .select(["user.name", "post.title"])
  .getRawMany();
