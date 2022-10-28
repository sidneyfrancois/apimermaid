import { Request, Response } from "express";
import { ListAllProductsService } from "../services/ListAllProductsService";

class ListAllProductsController {
  async handle(request: Request, response: Response) {
    const service = new ListAllProductsService();

    const result = await service.execute();

    return response.json(result);
  }
}

export { ListAllProductsController };
