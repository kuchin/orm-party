// schema.prisma:
// view ActiveUser {
//   id    Int    @id
//   name  String
//   email String
//   @@map("active_users")
// }

const users = await prisma.activeUser.findMany({
  where: { name: { startsWith: "A" } },
});
