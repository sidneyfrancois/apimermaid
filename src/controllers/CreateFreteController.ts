import { Request, Response } from "express";
import { CreateFreteService } from "../services/CreateFreteService";

class CreateFreteController {
  async handle(request: Request, response: Response) {
    const { formaEnvio, precoEnvio, observacoes, address_id } = request.body;

    const service = new CreateFreteService();

    const result = await service.execute({
      formaEnvio,
      precoEnvio,
      observacoes,
      address_id,
    });

    return response.json(result);
  }
}

export { CreateFreteController };
