import { Request, Response } from "express";
import { CreateCategoryService } from "../services/CrateCategoryService";

class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const service = new CreateCategoryService();
    const result = await service.execute({ name });

    return response.json(result);
  }
}

export { CreateCategoryController };
