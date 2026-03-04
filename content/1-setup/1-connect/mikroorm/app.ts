import { MikroORM } from "@mikro-orm/postgresql";
import { User } from "./entity";

const orm = await MikroORM.init({
  dbName: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST ?? "localhost",
  port: Number(process.env.DB_PORT ?? 5432),
  entities: [User],
});
