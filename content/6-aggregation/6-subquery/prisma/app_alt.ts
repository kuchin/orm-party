// Alternative: single query with raw SQL
const users = await prisma.$queryRaw`
  SELECT * FROM users
  WHERE id IN (
    SELECT user_id FROM orders
    WHERE amount > (
      SELECT AVG(amount) FROM orders
    )
  )
`;
