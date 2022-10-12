import { Router } from "express";
import { CreateAddressController } from "./controllers/CreateAddressController";
import { CreateOrderController } from "./controllers/CreateOrderController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListAllOrdersController } from "./controllers/ListAllOrdersController";

const routes = Router();

routes.get("/", new ListAllOrdersController().handle);
routes.post("/orders", new CreateOrderController().handle);
routes.post("/users", new CreateUserController().handle);
routes.post("/address", new CreateAddressController().handle);

export { routes };
