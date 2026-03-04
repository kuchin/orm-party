// No window function API; use raw SQL
const orders = await prisma.$queryRaw`
  SELECT name, amount,
    ROW_NUMBER() OVER (
      ORDER BY amount DESC
    ) AS rank
  FROM orders
`;
