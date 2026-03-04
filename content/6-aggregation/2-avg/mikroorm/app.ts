const average = await orm.em
  .createQueryBuilder(Order, "o")
  .select("avg(o.amount) as avg")
  .execute("get");

// Average per user
const perUser = await orm.em
  .createQueryBuilder(Order, "o")
  .select(["o.user_id as user_id", "avg(o.amount) as avg"])
  .groupBy("o.user_id")
  .execute();
