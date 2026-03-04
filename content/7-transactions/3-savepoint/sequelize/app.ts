await sequelize.transaction(async (outerTx) => {
  const order = await Order.create(
    { userId: 1, amount: 100 },
    { transaction: outerTx },
  );

  try {
    await sequelize.transaction(
      { transaction: outerTx },
      async (innerTx) => {
        await OrderItem.create(
          { orderId: order.id, productId: 42 },
          { transaction: innerTx },
        );
        throw new Error("item failed");
      },
    );
  } catch {
    // only nested transaction rolled back
  }
});
