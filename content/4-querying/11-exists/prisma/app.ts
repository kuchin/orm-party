// Prisma has no .exists(); use findFirst
const exists =
  (await prisma.user.findFirst({
    where: { email: "alice@example.com" },
    select: { id: true },
  })) !== null;
