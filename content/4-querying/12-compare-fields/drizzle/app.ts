import { lt } from "drizzle-orm";

const result = await db
  .select()
  .from(products)
  .where(
    lt(products.salePrice, products.originalPrice)
  );
