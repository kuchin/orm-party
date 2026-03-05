// $queryRaw returns typed objects (no classes)
type UserRow = {
  id: number;
  name: string;
  email: string;
};

const users = await prisma.$queryRaw<UserRow[]>`
  SELECT * FROM users WHERE age > ${25}
`;
