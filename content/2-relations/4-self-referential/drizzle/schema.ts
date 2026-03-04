import { pgTable, serial, text, integer } from "drizzle-orm/pg-core";

export const employees = pgTable("employees", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  managerId: integer("manager_id"),
});
