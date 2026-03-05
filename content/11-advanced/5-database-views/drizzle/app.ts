import { pgView } from "drizzle-orm/pg-core";
import { eq, like } from "drizzle-orm";

const activeUsers = pgView("active_users").as(
  (qb) =>
    qb
      .select({
        id: users.id,
        name: users.name,
        email: users.email,
      })
      .from(users)
      .where(eq(users.isActive, true))
);

const result = await db
  .select()
  .from(activeUsers)
  .where(like(activeUsers.name, "A%"));
