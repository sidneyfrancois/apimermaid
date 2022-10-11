import { Order } from "../entities/Order";
import { AppDataSource } from "../database";
import { Twilio } from "twilio";
require("dotenv").config();

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

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioNumber = process.env.TWILIO_PHONE_NUMBER;
    const myNumber = process.env.MY_NUMBER;

    const client = new Twilio(accountSid, authToken);

    client.messages
      .create({
        from: twilioNumber,
        to: myNumber,
        body: `Olá, a sua compra foi confirmada!
        valor total da compra: ${totalValue}`,
      })
      .then((message) => console.log(message.sid));

    return order;
  }
}

export { CreateOrderService };
