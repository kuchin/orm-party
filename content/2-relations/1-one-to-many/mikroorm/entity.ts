import {
  Collection,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";

@Entity({ tableName: "users" })
export class User {
  @PrimaryKey()
  id!: number;

  @Property({ length: 255 })
  name!: string;

  @OneToMany(() => Post, (post) => post.author)
  posts = new Collection<Post>(this);
}

@Entity({ tableName: "posts" })
export class Post {
  @PrimaryKey()
  id!: number;

  @Property({ length: 255 })
  title!: string;

  @ManyToOne(() => User, { fieldName: "author_id" })
  author!: User;
}
