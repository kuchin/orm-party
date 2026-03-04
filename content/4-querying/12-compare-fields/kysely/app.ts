const products = await db
  .selectFrom('products')
  .selectAll()
  .whereRef('sale_price', '<', 'original_price')
  .execute()
