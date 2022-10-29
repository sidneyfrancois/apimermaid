import { ListAllCategoriesService } from "../services/ListAllCategoriesService";
import { Request, Response } from "express";

class ListAllCategoriesControler {
  async handle(request: Request, response: Response): Promise<Response> {
    const service = new ListAllCategoriesService();

    const result = await service.execute();

    return response.json(result);
  }
}

export { ListAllCategoriesControler };
