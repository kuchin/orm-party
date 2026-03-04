// Prisma groupBy supports model fields only;
// for date truncation, use $queryRaw
const perMonth = await prisma.$queryRaw`
  SELECT
    DATE_TRUNC('month', "created_at") AS month,
    COUNT(*)::int AS order_count,
    SUM(amount) AS total
  FROM orders
  GROUP BY DATE_TRUNC('month', "created_at")
  ORDER BY month
`;
