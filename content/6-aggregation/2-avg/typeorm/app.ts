const result = await orderRepository
  .createQueryBuilder("order")
  .select("AVG(order.amount)", "average")
  .getRawOne();

// Average per user
const perUser = await orderRepository
  .createQueryBuilder("order")
  .select("order.userId", "userId")
  .addSelect("AVG(order.amount)", "average")
  .groupBy("order.userId")
  .getRawMany();
