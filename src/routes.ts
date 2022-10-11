import { Router } from "express";
import { CreateOrderController } from "./controllers/CreateOrderController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListAllOrdersController } from "./controllers/ListAllOrdersController";

const routes = Router();

routes.get("/", new ListAllOrdersController().handle);
routes.post("/orders", new CreateOrderController().handle);
routes.post("/users", new CreateUserController().handle);

export { routes };
