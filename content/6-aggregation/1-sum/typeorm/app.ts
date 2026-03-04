// Total of all order amounts
const result = await orderRepository
  .createQueryBuilder("order")
  .select("SUM(order.amount)", "total")
  .getRawOne();

// Total per user
const perUser = await orderRepository
  .createQueryBuilder("order")
  .select("order.userId", "userId")
  .addSelect("SUM(order.amount)", "total")
  .groupBy("order.userId")
  .getRawMany();
