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
exports.Order = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const Address_1 = require("./Address");
const Frete_1 = require("./Frete");
const User_1 = require("./User");
let Order = class Order {
    constructor() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Order.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "product_name" }),
    __metadata("design:type", String)
], Order.prototype, "productName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "unit_price" }),
    __metadata("design:type", Number)
], Order.prototype, "unitPrice", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Order.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "total_value" }),
    __metadata("design:type", Number)
], Order.prototype, "totalValue", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Address_1.Address),
    (0, typeorm_1.JoinColumn)({ name: "address_id" }),
    __metadata("design:type", Address_1.Address)
], Order.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Frete_1.Frete),
    (0, typeorm_1.JoinColumn)({ name: "frete_id" }),
    __metadata("design:type", Frete_1.Frete)
], Order.prototype, "frete", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User),
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    __metadata("design:type", User_1.User)
], Order.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Order.prototype, "frete_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Order.prototype, "address_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Order.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Order.prototype, "created_at", void 0);
Order = __decorate([
    (0, typeorm_1.Entity)("orders"),
    __metadata("design:paramtypes", [])
], Order);
exports.Order = Order;
