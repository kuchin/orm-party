const result = await orderRepository
  .createQueryBuilder("order")
  .select("DATE_TRUNC('month', order.created_at)", "month")
  .addSelect("COUNT(*)", "orderCount")
  .addSelect("SUM(order.amount)", "total")
  .groupBy("DATE_TRUNC('month', order.created_at)")
  .orderBy("month")
  .getRawMany();
