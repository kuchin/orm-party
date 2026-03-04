import { pgTable, serial, text, integer } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
});

export const profiles = pgTable("profiles", {
  id: serial("id").primaryKey(),
  bio: text("bio"),
  userId: integer("user_id").notNull().unique().references(() => users.id),
});
