// Prisma has no HAVING clause; use raw SQL
const active = await prisma.$queryRaw<
  { name: string; post_count: bigint }[]
>`
  SELECT u.name, COUNT(p.id) AS post_count
  FROM users u
  JOIN posts p ON p.author_id = u.id
  GROUP BY u.id, u.name
  HAVING COUNT(p.id) > 5
`;
