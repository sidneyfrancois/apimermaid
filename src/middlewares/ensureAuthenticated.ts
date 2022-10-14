import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppDataSource } from "../database";
import { User } from "../entities/User";
import { AppError } from "../error/AppError";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing, not authenticated!");
  }

  // Pegar token após a palavra Bearer
  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "318450870ed5fa6e63092b8933f28bb8"
    ) as IPayload;

    const repository = AppDataSource.getRepository(User);

    const user = await repository.findOneBy({ id: user_id });

    if (!user) {
      throw new AppError("User does not exists!");
    }

    request.user = {
      id: user_id,
    };

    next();
  } catch {
    throw new AppError("Invalid Token");
  }
}
