import { AppDataSource } from "../database";
import { Category } from "../entities/Category";

interface ICategoryRequest {
  name: string;
}

class CreateCategoryService {
  async execute({ name }: ICategoryRequest): Promise<Category> {
    const repository = AppDataSource.getRepository(Category);

    const category = repository.create({ name });

    await repository.save(category);

    return category;
  }
}

export { CreateCategoryService };
