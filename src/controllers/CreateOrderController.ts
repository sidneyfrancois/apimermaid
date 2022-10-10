import { Request, Response } from "express";
import { CreateOrderService } from "../services/CreateOrderService";

class CreateOrderController {
  async handle(request: Request, response: Response) {
    const { productName, unitPrice, quantity } = request.body;

    const service = new CreateOrderService();

    const result = await service.execute({ productName, unitPrice, quantity });

    return response.json(result);
  }
}

export { CreateOrderController };