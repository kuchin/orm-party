const users = await orm.em
  .createQueryBuilder(User, "u")
  .select(["u.name", "count(p.id) as post_count"])
  .join("u.posts", "p")
  .groupBy(["u.id", "u.name"])
  .having("count(p.id) > ?", [5])
  .execute();
