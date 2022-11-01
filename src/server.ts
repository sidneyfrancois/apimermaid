import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { routes } from "./routes";
import cors from "cors";
import { AppDataSource } from "./database";
import { AppError } from "./error/AppError";
require("dotenv").config();

const allowedOrigins = ["https://lovely-youtiao-6b8306.netlify.app"];
// const allowedOrigins = ["http://127.0.0.1:5173"];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

const app = express();

AppDataSource.initialize()
  .then(() => {
    // const app = express();

    app.use(cors(options));
    app.use(express.json());
    app.use(routes);

    // Error
    app.use(
      (
        err: Error,
        request: Request,
        response: Response,
        next: NextFunction
      ) => {
        if (err instanceof AppError) {
          return response.status(err.statusCode).json({
            message: err.message,
          });
        }

        return response.status(500).json({
          status: "error",
          message: `Internal server error - ${err.message}`,
        });
      }
    );

    app.listen(process.env.PORT, () => console.log("Mermaid API is running"));
  })
  .catch((error) => console.log("Database connection error: " + error));
