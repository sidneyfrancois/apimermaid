import { Request, Response } from "express";
import { ListFreteService } from "../services/ListFreteService";

class ListFretesController {
  async handle(request: Request, response: Response) {
    const service = new ListFreteService();

    const result = await service.execute();

    return response.json(result);
  }
}

export { ListFretesController };
