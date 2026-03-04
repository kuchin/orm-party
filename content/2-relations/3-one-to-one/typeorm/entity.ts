import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Profile, (profile) => profile.user)
  profile: Profile;
}

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  bio: string;

  @OneToOne(() => User, (user) => user.profile)
  @JoinColumn()
  user: User;
}
