import { AppDataSource } from "../database";
import { Category } from "../entities/Category";

class GetOneCategoryService {
  async execute(id: string) {
    const repository = AppDataSource.getRepository(Category);

    const category = await repository.findOne({
      where: { id: id },
      relations: {
        products: true,
      },
    });

    return category;
  }
}

export { GetOneCategoryService };
