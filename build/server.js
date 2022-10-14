"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const database_1 = require("./database");
const routes_1 = require("./routes");
require("express-async-errors");
const cors_1 = __importDefault(require("cors"));
require("dotenv").config();
const allowedOrigins = ["http://127.0.0.1:5173"];
const options = {
    origin: allowedOrigins,
};
database_1.AppDataSource.initialize()
    .then(() => {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)(options));
    app.use(express_1.default.json());
    app.use(routes_1.routes);
    // Error
    app.listen(process.env.PORT, () => console.log("Mermaid API is running"));
})
    .catch((error) => console.log("Database connection error: " + error));
