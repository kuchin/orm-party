const orders = await dataSource
  .getRepository(Order)
  .createQueryBuilder("order")
  .select("order.name", "name")
  .addSelect("order.amount", "amount")
  .addSelect(
    "ROW_NUMBER() OVER (ORDER BY order.amount DESC)",
    "rank"
  )
  .getRawMany();
