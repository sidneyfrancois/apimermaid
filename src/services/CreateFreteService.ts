import { AppDataSource } from "../database";
import { Frete } from "../entities/Frete";

interface IFreteRequest {
  formaEnvio: string;
  precoEnvio: number;
  observacoes: string;
}

class CreateFreteService {
  async execute({
    formaEnvio,
    precoEnvio,
    observacoes,
  }: IFreteRequest): Promise<Frete> {
    const repository = AppDataSource.getRepository(Frete);

    const frete = repository.create({
      formaEnvio,
      precoEnvio,
      observacoes,
    });

    await repository.save(frete);

    return frete;
  }
}

export { CreateFreteService };
