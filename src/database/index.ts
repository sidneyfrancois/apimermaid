import "reflect-metadata";
import { DataSource } from "typeorm";
require("dotenv").config();

const port = process.env.TYPEORM_PORT as number | undefined;

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.TYPEORM_HOST,
  port: port,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [`${process.env.TYPEORM_ENTITIES}/entities/*.{ts,js}`],
  migrations: [
    `${process.env.TYPEORM_MIGRATIONS}/database/migrations/*.{ts,js}`,
  ],
});

export { AppDataSource };
