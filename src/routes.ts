import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateAddressController } from "./controllers/CreateAddressController";
import { CreateFreteController } from "./controllers/CreateFreteController";
import { CreateOrderController } from "./controllers/CreateOrderController";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetOrderController } from "./controllers/GetOrderController";
import { ListAllOrdersController } from "./controllers/ListAllOrdersController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const routes = Router();

routes.get("/", new ListAllOrdersController().handle);

routes.post("/orders", ensureAuthenticated, new CreateOrderController().handle);
routes.get("/orders", new GetOrderController().handle);

routes.post("/users", new CreateUserController().handle);
routes.post("/auth", new AuthenticateUserController().handle);

routes.post(
  "/address",
  ensureAuthenticated,
  new CreateAddressController().handle
);

routes.post("/frete", ensureAuthenticated, new CreateFreteController().handle);

export { routes };
