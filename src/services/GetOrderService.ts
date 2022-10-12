import { AppDataSource } from "../database";
import { Order } from "../entities/Order";

class GetOrderService {
  async execute(id: string): Promise<Order> {
    const repository = AppDataSource.getRepository(Order);

    const order = await repository.findOneBy({ id });

    return order;
  }
}

export { GetOrderService };
