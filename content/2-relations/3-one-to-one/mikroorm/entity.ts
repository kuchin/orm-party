import {
  Entity,
  OneToOne,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";

@Entity({ tableName: "users" })
export class User {
  @PrimaryKey()
  id!: number;

  @Property({ length: 255 })
  name!: string;

  @OneToOne(() => Profile, (profile) => profile.user, {
    nullable: true,
  })
  profile?: Profile;
}

@Entity({ tableName: "profiles" })
export class Profile {
  @PrimaryKey()
  id!: number;

  @Property({ type: "text" })
  bio!: string;

  @OneToOne(() => User, (user) => user.profile, {
    owner: true,
    fieldName: "user_id",
    unique: true,
  })
  user!: User;
}
