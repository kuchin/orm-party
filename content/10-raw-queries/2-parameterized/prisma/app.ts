const age = 25;
const city = "NYC";

const users = await prisma.$queryRaw`
  SELECT id, name, email FROM users
  WHERE age > ${age} AND city = ${city}
`;
