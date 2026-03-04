try {
  await prisma.$transaction(async (tx) => {
    await tx.account.update({
      where: { userId: 1 },
      data: { balance: { decrement: 100 } },
    });
    await tx.account.update({
      where: { userId: 2 },
      data: { balance: { increment: 100 } },
    });
    if (errorCondition) {
      throw new Error("Transfer failed");
    }
  });
} catch (e) {
  // transaction rolled back automatically
}
