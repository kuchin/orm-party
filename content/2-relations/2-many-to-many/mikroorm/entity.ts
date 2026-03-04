import {
  Collection,
  Entity,
  ManyToMany,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";

@Entity({ tableName: "posts" })
export class Post {
  @PrimaryKey()
  id!: number;

  @Property({ length: 255 })
  title!: string;

  @ManyToMany(() => Tag, (tag) => tag.posts, {
    owner: true,
    pivotTable: "post_tags",
    joinColumn: "post_id",
    inverseJoinColumn: "tag_id",
  })
  tags = new Collection<Tag>(this);
}

@Entity({ tableName: "tags" })
export class Tag {
  @PrimaryKey()
  id!: number;

  @Property({ length: 100, unique: true })
  name!: string;

  @ManyToMany(() => Post, (post) => post.tags)
  posts = new Collection<Post>(this);
}
