import { AppDataSource } from "../database";
import { User } from "../entities/User";
import { hash } from "bcrypt";

interface IUserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: IUserRequest): Promise<User> {
    const repository = AppDataSource.getRepository(User);

    // Fazendo o hash do password a ser salvo no banco de dados
    const passwordHash = await hash(password, 8);

    const user = repository.create({
      name,
      email,
      password: passwordHash,
    });

    await repository.save(user);

    return user;
  }
}

export { CreateUserService };
