import { AppDataSource } from "../database";
import { Product } from "../entities/Product";

interface IProductRequest {
  name: string;
  price: number;
  description: string;
  category_id: string;
}

class CreateProductService {
  async execute({
    name,
    price,
    description,
    category_id,
  }: IProductRequest): Promise<Product> {
    const repository = AppDataSource.getRepository(Product);

    const product = repository.create({
      name,
      price,
      description,
      category_id,
    });

    await repository.save(product);

    return product;
  }
}

export { CreateProductService };
