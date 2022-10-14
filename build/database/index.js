"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
require("dotenv").config();
const port = process.env.TYPEORM_PORT;
let sslOption;
process.env.NODE_ENV === "development"
    ? (sslOption = null)
    : (sslOption = {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    });
const AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.TYPEORM_HOST,
    port: port,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [`${process.env.TYPEORM_ENTITIES}/entities/*.{ts,js}`],
    migrations: [
        `${process.env.TYPEORM_MIGRATIONS}/database/migrations/*.{ts,js}`,
        // `${process.env.TYPEORM_MIGRATIONS}/database/migrations/1665443391108-CreateOrder.ts`,
    ],
    extra: sslOption,
});
exports.AppDataSource = AppDataSource;
