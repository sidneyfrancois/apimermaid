import { Router } from "express";
import { CreateOrderController } from "./controllers/CreateOrderController";

const routes = Router();

routes.post("/orders", new CreateOrderController().handle);

export { routes };
