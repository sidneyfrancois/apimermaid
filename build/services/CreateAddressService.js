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
exports.CreateAddressService = void 0;
const database_1 = require("../database");
const Address_1 = require("../entities/Address");
class CreateAddressService {
    execute({ estado, cidade, bairro, rua, numero, cep, user_id, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.AppDataSource.getRepository(Address_1.Address);
            const address = repository.create({
                estado,
                cidade,
                bairro,
                rua,
                numero,
                cep,
                user_id,
            });
            yield repository.save(address);
            return address;
        });
    }
}
exports.CreateAddressService = CreateAddressService;
