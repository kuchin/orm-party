import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity({ tableName: "posts" })
export class Post {
  @PrimaryKey()
  id!: number;

  @Property({ length: 255 })
  title!: string;

  @Property({ type: "text", nullable: true })
  content?: string;

  @Property({ default: 0 })
  views = 0;

  @Property({ fieldName: "is_published", default: false })
  isPublished = false;

  @Property({ fieldName: "published_at", nullable: true })
  publishedAt?: Date;

  @Property({ fieldName: "created_at", onCreate: () => new Date() })
  createdAt = new Date();
}
