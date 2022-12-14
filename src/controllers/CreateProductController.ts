import { Request, Response } from "express";
import { CreateProductService } from "../services/CreateProductService";

class CreateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, price, description, category_id } = request.body;

    const service = new CreateProductService();

    const result = await service.execute({
      name,
      price,
      description,
      category_id,
    });

    return response.json(result);
  }
}

export { CreateProductController };
