import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
  NonAttribute,
  Sequelize,
} from "sequelize";

const sequelize = new Sequelize(process.env.DATABASE_URL!, {
  dialect: "postgres",
});

export class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare posts?: NonAttribute<Post[]>;
}

User.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING(255), allowNull: false },
  },
  { sequelize, tableName: "users", timestamps: false },
);

export class Post extends Model<
  InferAttributes<Post>,
  InferCreationAttributes<Post>
> {
  declare id: CreationOptional<number>;
  declare title: string;
  declare authorId: ForeignKey<User["id"]>;
  declare author?: NonAttribute<User>;
}

Post.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING(255), allowNull: false },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "author_id",
      references: { model: "users", key: "id" },
    },
  },
  { sequelize, tableName: "posts", timestamps: false },
);

User.hasMany(Post, { as: "posts", foreignKey: "authorId" });
Post.belongsTo(User, { as: "author", foreignKey: "authorId" });
