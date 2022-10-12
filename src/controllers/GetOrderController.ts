import { Request } from "express";
import { GetOrderService } from "../services/GetOrderService";

class GetOrderController {
  async handle(request: Request, response: Response) {
    const { id } = request.body;

    const service = new GetOrderService();
    const result = await service.execute(id);

    return response.json(result);
  }
}

export { GetOrderController };
