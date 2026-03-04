const users = await orm.em
  .createQueryBuilder(Order, "o")
  .select(["o.user_id as user_id", "sum(o.amount) as total"])
  .groupBy("o.user_id")
  .having("sum(o.amount) > ?", [1000])
  .execute();
