import { pgTable, serial, text, integer, primaryKey } from "drizzle-orm/pg-core";

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
});

export const tags = pgTable("tags", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
});

export const postTags = pgTable("post_tags", {
  postId: integer("post_id").notNull().references(() => posts.id),
  tagId: integer("tag_id").notNull().references(() => tags.id),
}, (t) => [primaryKey({ columns: [t.postId, t.tagId] })]);
