await prisma.$transaction(async (tx) => {
  const user = await tx.user.create({
    data: { name: "Alice", email: "alice@example.com" },
  });
  await tx.account.update({
    where: { userId: user.id },
    data: { balance: { decrement: 100 } },
  });
});
