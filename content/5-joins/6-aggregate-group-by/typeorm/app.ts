const result = await userRepository
  .createQueryBuilder("user")
  .leftJoin("user.posts", "post")
  .select("user.name", "name")
  .addSelect("COUNT(post.id)", "postCount")
  .groupBy("user.id")
  .addGroupBy("user.name")
  .orderBy("postCount", "DESC")
  .getRawMany();
