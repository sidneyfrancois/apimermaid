import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { AppDataSource } from "../database";
import { User } from "../entities/User";
import { AppError } from "../error/AppError";

interface IRequestUser {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
    id: string;
  };
  token: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IRequestUser): Promise<IResponse> {
    const repository = AppDataSource.getRepository(User);

    const user = await repository.findOneBy({ email: email });

    if (!user) {
      throw new AppError("User or password incorrect!");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("User or password incorrect");
    }

    const token = sign({}, "318450870ed5fa6e63092b8933f28bb8", {
      subject: user.id,
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
        id: user.id,
      },
    };

    return tokenReturn;
  }
}

export { AuthenticateUserService };
