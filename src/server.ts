import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./database";

// Conexão com o banco de dados através do typeorm

AppDataSource.initialize()
  .then(() => {
    const app = express();

    app.use(express.json());

    app.listen(3333, () => console.log("Mermaid API is running"));
  })
  .catch((error) => console.log("Database connection error: " + error));
