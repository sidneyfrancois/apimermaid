import { Request, Response } from "express";
import { GetProductService } from "../services/GetProductService";

class GetProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.query;

    const service = new GetProductService();
    const result = await service.execute(id);

    return response.json(result);
  }
}

export { GetProductController };
