import {
  pgTable, serial, text, integer,
  doublePrecision, boolean, timestamp, jsonb,
} from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: doublePrecision("price").notNull(),
  quantity: integer("quantity").notNull(),
  inStock: boolean("in_stock").notNull(),
  releaseDate: timestamp("release_date").notNull(),
  tags: jsonb("tags"),
});
