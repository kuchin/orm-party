const names = await orm.em
  .createQueryBuilder(User, "u")
  .select("distinct u.name")
  .execute();
