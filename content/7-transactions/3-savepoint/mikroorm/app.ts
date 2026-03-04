await orm.em.transactional(async (em) => {
  const order = em.create(Order, {
    user: 1,
    amount: 100,
  });
  await em.persistAndFlush(order);

  try {
    await em.transactional(async (inner) => {
      const item = inner.create(OrderItem, {
        order: order.id,
        product: 42,
      });
      await inner.persistAndFlush(item);
      throw new Error("item failed");
    });
  } catch {
    // only inner transaction rolled back
  }
});
