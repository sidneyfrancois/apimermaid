"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
require("dotenv").config();
const port = process.env.TYPEORM_PORT;
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
    ],
    extra: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});
exports.AppDataSource = AppDataSource;
