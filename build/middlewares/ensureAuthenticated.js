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
exports.ensureAuthenticated = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const database_1 = require("../database");
const User_1 = require("../entities/User");
function ensureAuthenticated(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const authHeader = request.headers.authorization;
        if (!authHeader) {
            throw new Error("Token missing, not authenticated!");
        }
        // Pegar token após a palavra Bearer
        const [, token] = authHeader.split(" ");
        try {
            const { sub: user_id } = (0, jsonwebtoken_1.verify)(token, "318450870ed5fa6e63092b8933f28bb8");
            const repository = database_1.AppDataSource.getRepository(User_1.User);
            const user = yield repository.findOneBy({ id: user_id });
            if (!user) {
                throw new Error("User does not exists!");
            }
            request.user = {
                id: user_id,
            };
            next();
        }
        catch (_a) {
            throw new Error("Invalid Token");
        }
    });
}
exports.ensureAuthenticated = ensureAuthenticated;
