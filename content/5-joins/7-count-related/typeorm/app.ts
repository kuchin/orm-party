const result = await userRepository
  .createQueryBuilder("user")
  .innerJoin("user.posts", "post")
  .select("user.name", "name")
  .addSelect("COUNT(post.id)", "postCount")
  .groupBy("user.id")
  .addGroupBy("user.name")
  .having("COUNT(post.id) > :min", { min: 5 })
  .getRawMany();
