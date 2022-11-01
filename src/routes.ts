import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateAddressController } from "./controllers/CreateAddressController";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateFreteController } from "./controllers/CreateFreteController";
import { CreateOrderController } from "./controllers/CreateOrderController";
import { CreateProductController } from "./controllers/CreateProductController";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetOneCategoryControler } from "./controllers/GetOneCategoryController";
import { GetOrderController } from "./controllers/GetOrderController";
import { GetProductController } from "./controllers/GetProductController";
import { ListAllCategoriesControler } from "./controllers/ListAllCategoriesController";
import { ListAllOrdersController } from "./controllers/ListAllOrdersController";
import { ListAllProductsController } from "./controllers/ListAllProductController";
import { ListFretesController } from "./controllers/ListFretesController";
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

routes.post("/frete", new CreateFreteController().handle);
routes.get("/frete", new ListFretesController().handle);

routes.post("/product", new CreateProductController().handle);
routes.get("/product/detail", new GetProductController().handle);
routes.get("/product", new ListAllProductsController().handle);

routes.post("/category", new CreateCategoryController().handle);
routes.get("/category", new ListAllCategoriesControler().handle);
routes.get("/category/detail", new GetOneCategoryControler().handle);

export { routes };
