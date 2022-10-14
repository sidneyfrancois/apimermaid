import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./database";
import { routes } from "./routes";
import "express-async-errors";
import cors from "cors";
import { AppError } from "./error/AppError";
import { Request, Response, NextFunction } from "express";
require("dotenv").config();

const allowedOrigins = ["http://127.0.0.1:5173"];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

AppDataSource.initialize()
  .then(() => {
    const app = express();

    app.use(cors(options));
    app.use(express.json());
    app.use(routes);

    // Error

    app.listen(process.env.PORT, () => console.log("Mermaid API is running"));
  })
  .catch((error) => console.log("Database connection error: " + error));
