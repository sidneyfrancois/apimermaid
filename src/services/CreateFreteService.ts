import { AppDataSource } from "../database";
import { Frete } from "../entities/Frete";

interface IFreteRequest {
  formaEnvio: string;
  precoEnvio: number;
  observacoes: string;
  address_id: string;
}

class CreateFreteService {
  async execute({
    formaEnvio,
    precoEnvio,
    observacoes,
    address_id,
  }: IFreteRequest): Promise<Frete> {
    const repository = AppDataSource.getRepository(Frete);

    const frete = repository.create({
      formaEnvio,
      precoEnvio,
      observacoes,
      address_id,
    });

    await repository.save(frete);

    return frete;
  }
}

export { CreateFreteService };
