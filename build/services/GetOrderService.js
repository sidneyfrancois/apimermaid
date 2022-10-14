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
exports.GetOrderService = void 0;
const database_1 = require("../database");
const Order_1 = require("../entities/Order");
class GetOrderService {
    execute(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.AppDataSource.getRepository(Order_1.Order);
            const order = yield repository.findOne({
                where: { id: id },
                relations: { address: true, frete: true, user: true },
            });
            return order;
        });
    }
}
exports.GetOrderService = GetOrderService;
