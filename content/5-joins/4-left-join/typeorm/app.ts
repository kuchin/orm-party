const result = await userRepository
  .createQueryBuilder("user")
  .leftJoinAndSelect("user.posts", "post")
  .getMany();

// users without posts have posts: []
