import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  NonAttribute,
  Sequelize,
} from "sequelize";

const sequelize = new Sequelize(process.env.DATABASE_URL!, {
  dialect: "postgres",
});

export class Post extends Model<
  InferAttributes<Post>,
  InferCreationAttributes<Post>
> {
  declare id: CreationOptional<number>;
  declare title: string;
  declare tags?: NonAttribute<Tag[]>;
}

Post.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING(255), allowNull: false },
  },
  { sequelize, tableName: "posts", timestamps: false },
);

export class Tag extends Model<
  InferAttributes<Tag>,
  InferCreationAttributes<Tag>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare posts?: NonAttribute<Post[]>;
}

Tag.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING(100), allowNull: false, unique: true },
  },
  { sequelize, tableName: "tags", timestamps: false },
);

Post.belongsToMany(Tag, {
  through: "post_tags",
  as: "tags",
  foreignKey: "post_id",
  otherKey: "tag_id",
});
Tag.belongsToMany(Post, {
  through: "post_tags",
  as: "posts",
  foreignKey: "tag_id",
  otherKey: "post_id",
});
