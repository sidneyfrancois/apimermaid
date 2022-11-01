import { AppDataSource } from "../database";
import { Frete } from "../entities/Frete";

class ListFreteService {
  async execute(): Promise<Frete[]> {
    const repository = AppDataSource.getRepository(Frete);

    const fretes = await repository.find();

    return fretes;
  }
}

export { ListFreteService };
