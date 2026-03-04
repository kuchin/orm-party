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
  declare profile?: NonAttribute<Profile>;
}

User.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING(255), allowNull: false },
  },
  { sequelize, tableName: "users", timestamps: false },
);

export class Profile extends Model<
  InferAttributes<Profile>,
  InferCreationAttributes<Profile>
> {
  declare id: CreationOptional<number>;
  declare bio: string;
  declare userId: ForeignKey<User["id"]>;
  declare user?: NonAttribute<User>;
}

Profile.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    bio: { type: DataTypes.TEXT, allowNull: false },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      field: "user_id",
      references: { model: "users", key: "id" },
    },
  },
  { sequelize, tableName: "profiles", timestamps: false },
);

User.hasOne(Profile, { as: "profile", foreignKey: "userId" });
Profile.belongsTo(User, { as: "user", foreignKey: "userId" });
