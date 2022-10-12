import { Request, Response } from "express";
import { CreateAddressService } from "../services/CreateAddressService";

class CreateAddressController {
  async handle(request: Request, response: Response) {
    const { estado, cidade, bairro, rua, numero, cep } = request.body;

    const service = new CreateAddressService();
    const result = await service.execute({
      estado,
      cidade,
      bairro,
      rua,
      numero,
      cep,
    });

    return response.json(result);
  }
}

export { CreateAddressController };
