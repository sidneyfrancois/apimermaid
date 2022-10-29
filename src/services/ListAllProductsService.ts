import { AppDataSource } from "../database";
import { Product } from "../entities/Product";

class ListAllProductsService {
  async execute(): Promise<Product[]> {
    const repository = AppDataSource.getRepository(Product);

    const orders = await repository.find({
      relations: {
        category: true,
      },
    });

    return orders;
  }
}

export { ListAllProductsService };
