"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./database");
const AppError_1 = require("./error/AppError");
require("dotenv").config();
const allowedOrigins = ["http://127.0.0.1:5173"];
const options = {
    origin: allowedOrigins,
};
const app = (0, express_1.default)();
database_1.AppDataSource.initialize()
    .then(() => {
    // const app = express();
    app.use((0, cors_1.default)(options));
    app.use(express_1.default.json());
    app.use(routes_1.routes);
    // Error
    app.use((err, request, response, next) => {
        if (err instanceof AppError_1.AppError) {
            return response.status(err.statusCode).json({
                message: err.message,
            });
        }
        return response.status(500).json({
            status: "error",
            message: `Internal server error - ${err.message}`,
        });
    });
    app.listen(process.env.PORT, () => console.log("Mermaid API is running"));
})
    .catch((error) => console.log("Database connection error: " + error));
