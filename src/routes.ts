import { Router } from "express";
import { CreateOrderController } from "./controllers/CreateOrderController";
import { ListAllOrdersController } from "./controllers/ListAllOrdersController";

const routes = Router();

routes.get("/", new ListAllOrdersController().handle);
routes.post("/orders", new CreateOrderController().handle);

export { routes };
