import { AppDataSource } from "../database";
import { Order } from "../entities/Order";

class ListAllOrdersService {
  async execute(): Promise<Order[]> {
    const repository = AppDataSource.getRepository(Order);

    const orders = await repository.find({
      relations: {
        address: true,
        frete: true,
        user: true,
      },
    });

    return orders;
  }
}

export { ListAllOrdersService };
