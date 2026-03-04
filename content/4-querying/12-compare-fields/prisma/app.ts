// No field-to-field comparison API;
// use raw SQL
const products = await prisma.$queryRaw`
  SELECT * FROM products
  WHERE sale_price < original_price
`;
