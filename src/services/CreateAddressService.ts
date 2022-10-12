import { AppDataSource } from "../database";
import { Address } from "../entities/Address";

interface IRequestAddress {
  estado: string;
  cidade: string;
  bairro: string;
  rua: string;
  numero: number;
  cep: string;
}

class CreateAddressService {
  async execute({
    estado,
    cidade,
    bairro,
    rua,
    cep,
  }: IRequestAddress): Promise<Address> {
    const repository = AppDataSource.getRepository(Address);

    const address = repository.create({
      estado,
      cidade,
      bairro,
      rua,
      cep,
    });

    await repository.save(address);

    return address;
  }
}

export { CreateAddressService };
