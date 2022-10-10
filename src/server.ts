import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./database";
import { routes } from "./routes";
require("dotenv").config();

AppDataSource.initialize()
  .then(() => {
    const app = express();

    app.use(express.json());
    app.use(routes);

    app.listen(process.env.PORT, () => console.log("Mermaid API is running"));
  })
  .catch((error) => console.log("Database connection error: " + error));
