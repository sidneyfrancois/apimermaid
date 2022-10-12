import { Request, Response } from "express";
import { CreateFreteService } from "../services/CreateFreteService";

class CreateFreteController {
  async handle(request: Request, response: Response) {
    const { formaEnvio, precoEnvio, observacoes } = request.body;

    const service = new CreateFreteService();

    const result = await service.execute({
      formaEnvio,
      precoEnvio,
      observacoes,
    });

    return response.json(result);
  }
}

export { CreateFreteController };
