// Add a new column to the schema

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").unique(),
  age: integer("age"),  // ← new
});
