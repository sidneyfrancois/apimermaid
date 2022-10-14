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
exports.CreateAddressController = void 0;
const CreateAddressService_1 = require("../services/CreateAddressService");
class CreateAddressController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { estado, cidade, bairro, rua, numero, cep, user_id } = request.body;
            const service = new CreateAddressService_1.CreateAddressService();
            const result = yield service.execute({
                estado,
                cidade,
                bairro,
                rua,
                numero,
                cep,
                user_id,
            });
            return response.json(result);
        });
    }
}
exports.CreateAddressController = CreateAddressController;
