import { Order } from "../entities/Order";
import { AppDataSource } from "../database";

interface IOrderRequest {
  productName: string;
  unitPrice: number;
  quantity: number;
}

class CreateOrderService {
  async execute({
    productName,
    unitPrice,
    quantity,
  }: IOrderRequest): Promise<Order> {
    const repository = AppDataSource.getRepository(Order);

    const totalValue = unitPrice * quantity;

    const order = repository.create({
      productName,
      unitPrice,
      quantity,
      totalValue,
    });

    await repository.save(order);

    return order;
  }
}

export { CreateOrderService };
