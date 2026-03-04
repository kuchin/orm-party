const users = await orm.em
  .createQueryBuilder(User, "u")
  .select(["u.name", "count(p.id) as post_count"])
  .leftJoin("u.posts", "p")
  .groupBy(["u.id", "u.name"])
  .orderBy({ post_count: "desc" })
  .execute();
