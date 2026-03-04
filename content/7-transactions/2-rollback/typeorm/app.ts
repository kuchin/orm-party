const queryRunner = dataSource.createQueryRunner();
await queryRunner.startTransaction();
try {
  await queryRunner.manager.update(
    Account, { userId: 1 },
    { balance: () => "balance - 100" }
  );
  await queryRunner.manager.update(
    Account, { userId: 2 },
    { balance: () => "balance + 100" }
  );
  await queryRunner.commitTransaction();
} catch (e) {
  await queryRunner.rollbackTransaction();
} finally {
  await queryRunner.release();
}
