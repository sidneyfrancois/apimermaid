import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { password, email } = request.body;

    const service = new AuthenticateUserService();

    const token = await service.execute({ email, password });

    return response.json(token);
  }
}

export { AuthenticateUserController };
