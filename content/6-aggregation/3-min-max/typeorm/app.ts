const result = await orderRepository
  .createQueryBuilder("order")
  .select("MIN(order.amount)", "smallest")
  .addSelect("MAX(order.amount)", "largest")
  .getRawOne();

// Per user
const perUser = await orderRepository
  .createQueryBuilder("order")
  .select("order.userId", "userId")
  .addSelect("MIN(order.amount)", "smallest")
  .addSelect("MAX(order.amount)", "largest")
  .groupBy("order.userId")
  .getRawMany();
