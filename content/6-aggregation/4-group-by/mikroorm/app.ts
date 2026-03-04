// Orders per month
const perMonth = await orm.em
  .createQueryBuilder(Order, "o")
  .select([
    "date_trunc('month', o.created_at) as month",
    "count(o.id) as order_count",
    "sum(o.amount) as total",
  ])
  .groupBy("date_trunc('month', o.created_at)")
  .orderBy({ month: "asc" })
  .execute();
