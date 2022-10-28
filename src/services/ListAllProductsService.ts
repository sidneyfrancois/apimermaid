import { AppDataSource } from "../database";
import { Product } from "../entities/Product";

class ListAllProductsService {
  async execute(): Promise<Product[]> {
    const repository = AppDataSource.getRepository(Product);

    const orders = await repository.find();

    return orders;
  }
}

export { ListAllProductsService };
