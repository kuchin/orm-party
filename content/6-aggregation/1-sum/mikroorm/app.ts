// Total of all order amounts
const total = await orm.em
  .createQueryBuilder(Order, "o")
  .select("sum(o.amount) as total")
  .execute("get");

// Total per user
const perUser = await orm.em
  .createQueryBuilder(Order, "o")
  .select(["o.user_id as user_id", "sum(o.amount) as total"])
  .groupBy("o.user_id")
  .execute();
