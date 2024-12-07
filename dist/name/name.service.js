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
exports.NameService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let NameService = class NameService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    getAll() {
        return this.prisma.name.findMany();
    }
    getNameById(id) {
        return this.prisma.name.findUnique({ where: { id } });
    }
    createName(data) {
        return this.prisma.name.create({ data });
    }
    updateName(id, data) {
        const name = this.prisma.name.findUnique({ where: { id } });
        if (!name)
            throw new common_1.HttpException('Name by this ID not found', 404);
        return this.prisma.name.update({ where: { id }, data });
    }
    deleteNameById(id) {
        const name = this.prisma.name.findUnique({ where: { id } });
        if (!name)
            throw new common_1.HttpException('Name not found', 404);
    }
};
exports.NameService = NameService;
exports.NameService = NameService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NameService);
//# sourceMappingURL=name.service.js.map