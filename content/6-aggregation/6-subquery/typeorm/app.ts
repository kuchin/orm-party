const result = await userRepository
  .createQueryBuilder("user")
  .where((qb) => {
    const subQuery = qb.subQuery()
      .select("order.userId")
      .from(Order, "order")
      .where("order.amount > (SELECT AVG(amount) FROM orders)")
      .getQuery();
    return "user.id IN " + subQuery;
  })
  .getMany();
