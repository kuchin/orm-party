import { sql } from "drizzle-orm";

const results = await db
  .select()
  .from(articles)
  .where(
    sql`to_tsvector('english',
      ${articles.title} || ' ' || ${articles.body})
    @@ plainto_tsquery('english',
      ${"database optimization"})`
  );
