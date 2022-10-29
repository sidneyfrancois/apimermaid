import { AppDataSource } from "../database";
import { Category } from "../entities/Category";

class ListAllCategoriesService {
  async execute(): Promise<Category[]> {
    const repository = AppDataSource.getRepository(Category);

    const categories = await repository.find();

    return categories;
  }
}

export { ListAllCategoriesService };
