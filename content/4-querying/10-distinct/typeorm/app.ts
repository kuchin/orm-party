const names = await userRepository
  .createQueryBuilder("user")
  .select("DISTINCT user.name", "name")
  .getRawMany();
