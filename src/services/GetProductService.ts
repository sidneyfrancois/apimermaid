import { AppDataSource } from "../database";
import { Product } from "../entities/Product";

class GetProductService {
  async execute(id: string): Promise<Product> {
    const repository = AppDataSource.getRepository(Product);

    const product = await repository.findOne({
      where: { id: id },
      relations: {
        category: true,
      },
    });

    return product;
  }
}

export { GetProductService };
