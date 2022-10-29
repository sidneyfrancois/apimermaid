import { Request, Response } from "express";
import { GetOneCategoryService } from "../services/GetOneCategoryService";

class GetOneCategoryControler {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.query;

    const service = new GetOneCategoryService();
    const result = await service.execute(id.toString());

    return response.json(result);
  }
}

export { GetOneCategoryControler };
