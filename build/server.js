"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const database_1 = require("./database");
const routes_1 = require("./routes");
require("dotenv").config();
database_1.AppDataSource.initialize()
    .then(() => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(routes_1.routes);
    app.listen(process.env.PORT, () => console.log("Mermaid API is running"));
})
    .catch((error) => console.log("Database connection error: " + error));
