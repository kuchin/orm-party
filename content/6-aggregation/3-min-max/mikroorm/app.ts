const result = await orm.em
  .createQueryBuilder(Order, "o")
  .select([
    "min(o.amount) as smallest",
    "max(o.amount) as largest",
  ])
  .execute("get");

// Per user
const perUser = await orm.em
  .createQueryBuilder(Order, "o")
  .select([
    "o.user_id as user_id",
    "min(o.amount) as smallest",
    "max(o.amount) as largest",
  ])
  .groupBy("o.user_id")
  .execute();
