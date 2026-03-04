import { DataSource } from "typeorm";
import { User } from "./entity";

const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  entities: [User],
  synchronize: true,
});

await AppDataSource.initialize();
