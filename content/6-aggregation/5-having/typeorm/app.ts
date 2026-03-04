const result = await orderRepository
  .createQueryBuilder("order")
  .select("order.userId", "userId")
  .addSelect("SUM(order.amount)", "total")
  .groupBy("order.userId")
  .having("SUM(order.amount) > :min", { min: 1000 })
  .getRawMany();
