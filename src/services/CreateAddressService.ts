import { AppDataSource } from "../database";
import { Address } from "../entities/Address";

interface IRequestAddress {
  estado: string;
  cidade: string;
  bairro: string;
  rua: string;
  numero: number;
  cep: string;
  user_id: string;
}

class CreateAddressService {
  async execute({
    estado,
    cidade,
    bairro,
    rua,
    numero,
    cep,
    user_id,
  }: IRequestAddress): Promise<Address> {
    const repository = AppDataSource.getRepository(Address);

    const address = repository.create({
      estado,
      cidade,
      bairro,
      rua,
      numero,
      cep,
      user_id,
    });

    await repository.save(address);

    return address;
  }
}

export { CreateAddressService };
