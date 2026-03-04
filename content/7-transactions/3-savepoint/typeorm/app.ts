const queryRunner = dataSource.createQueryRunner();
await queryRunner.startTransaction();
try {
  const order = await queryRunner.manager.save(
    Order, { userId: 1, amount: 100 }
  );

  await queryRunner.query("SAVEPOINT sp1");
  try {
    await queryRunner.manager.save(
      OrderItem, { orderId: order.id, productId: 42 }
    );
  } catch {
    await queryRunner.query("ROLLBACK TO sp1");
  }

  await queryRunner.commitTransaction();
} catch (e) {
  await queryRunner.rollbackTransaction();
} finally {
  await queryRunner.release();
}
