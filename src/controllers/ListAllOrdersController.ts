import { Request, Response } from "express";
import { ListAllOrdersService } from "../services/ListAllOrdersService";

class ListAllOrdersController {
  async handle(request: Request, response: Response) {
    const service = new ListAllOrdersService();

    const result = await service.execute();

    return response.json(result);
  }
}

export { ListAllOrdersController };
