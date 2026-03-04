const rows = await orm.em
  .createQueryBuilder(Order, "o")
  .select([
    "o.name",
    "o.amount",
    "row_number() over (order by o.amount desc) as rank",
  ])
  .execute();
