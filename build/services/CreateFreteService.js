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
exports.CreateFreteService = void 0;
const database_1 = require("../database");
const Frete_1 = require("../entities/Frete");
class CreateFreteService {
    execute({ formaEnvio, precoEnvio, observacoes, address_id, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.AppDataSource.getRepository(Frete_1.Frete);
            const frete = repository.create({
                formaEnvio,
                precoEnvio,
                observacoes,
                address_id,
            });
            yield repository.save(frete);
            return frete;
        });
    }
}
exports.CreateFreteService = CreateFreteService;
