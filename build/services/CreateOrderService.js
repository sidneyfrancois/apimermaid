"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderService = void 0;
const Order_1 = require("../entities/Order");
const database_1 = require("../database");
const twilio_1 = require("twilio");
require("dotenv").config();
class CreateOrderService {
    execute({ productName, unitPrice, quantity, address_id, frete_id, user_id, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.AppDataSource.getRepository(Order_1.Order);
            const totalValue = unitPrice * quantity;
            const order = repository.create({
                productName,
                unitPrice,
                quantity,
                totalValue,
                address_id,
                frete_id,
                user_id,
            });
            yield repository.save(order);
            const accountSid = process.env.TWILIO_ACCOUNT_SID;
            const authToken = process.env.TWILIO_AUTH_TOKEN;
            const twilioNumber = process.env.TWILIO_PHONE_NUMBER;
            const myNumber = process.env.MY_NUMBER;
            const myNumberWhatsapp = process.env.MY_NUMBER_WHATSAPP;
            const twilioWhatsappNumber = process.env.TWILIO_WHATSAPP_NUMBER;
            const client = new twilio_1.Twilio(accountSid, authToken);
            client.messages
                .create({
                from: twilioNumber,
                to: myNumber,
                body: `Olá, a sua compra foi confirmada!
        valor total da compra: ${totalValue}`,
            })
                .then((message) => console.log(message.sid));
            client.messages
                .create({
                from: twilioWhatsappNumber,
                to: myNumberWhatsapp,
                body: `Olá, a sua compra foi confirmada!
        valor total da compra: ${totalValue}`,
            })
                .then((message) => console.log(message.sid));
            return order;
        });
    }
}
exports.CreateOrderService = CreateOrderService;
