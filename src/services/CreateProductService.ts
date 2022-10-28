import { AppDataSource } from "../database";
import { Frete } from "../entities/Frete";
import { Product } from "../entities/Product";

interface IProductRequest {
  name: string;
  price: number;
  description: string;
}

class CreateProductService {
  async execute({
    name,
    price,
    description,
  }: IProductRequest): Promise<Product> {
    const repository = AppDataSource.getRepository(Product);

    const product = repository.create({
      name,
      price,
      description,
    });

    await repository.save(product);

    return product;
  }
}

export { CreateProductService };
