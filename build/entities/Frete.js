"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Frete = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const Address_1 = require("./Address");
let Frete = class Frete {
    constructor() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Frete.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "forma_envio" }),
    __metadata("design:type", String)
], Frete.prototype, "formaEnvio", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "preco_envio" }),
    __metadata("design:type", Number)
], Frete.prototype, "precoEnvio", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Frete.prototype, "observacoes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Address_1.Address),
    (0, typeorm_1.JoinColumn)({ name: "address_id" }),
    __metadata("design:type", Address_1.Address)
], Frete.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Frete.prototype, "address_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Frete.prototype, "created_at", void 0);
Frete = __decorate([
    (0, typeorm_1.Entity)("frete"),
    __metadata("design:paramtypes", [])
], Frete);
exports.Frete = Frete;
