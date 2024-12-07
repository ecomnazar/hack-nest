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
exports.TreeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TreeService = class TreeService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    getAll() {
        return this.prisma.tree.findMany();
    }
    getById(id) {
        return this.prisma.tree.findUnique({ where: { id } });
    }
    create(data) {
        return this.prisma.tree.create({ data });
    }
    update(id, data) {
        const tree = this.prisma.tree.findUnique({ where: { id } });
        if (!tree)
            throw new common_1.HttpException('Tree by this ID not found', 404);
        return this.prisma.tree.update({ where: { id }, data });
    }
    kill(id) {
        const tree = this.prisma.tree.findUnique({ where: { id } });
        if (!tree)
            throw new common_1.HttpException('Tree by this ID not found', 404);
        return this.prisma.tree.update({
            where: { id },
            data: { status: 'DELETED' },
        });
    }
    delete(id) {
        const tree = this.prisma.tree.findUnique({ where: { id } });
        if (!tree)
            throw new common_1.HttpException('Tree not found', 404);
        return this.prisma.tree.delete({ where: { id } });
    }
    getTreesByLocationId(locationId) {
        return this.prisma.tree.findMany({ where: { locationId } });
    }
    addImageUrlByTreeId(id, imgUrl) {
        const tree = this.prisma.tree.findUnique({ where: { id } });
        if (!tree)
            throw new common_1.HttpException('Tree by this ID not found', 404);
        return this.prisma.tree.update({ where: { id }, data: { imgUrl } });
    }
    async isPositionAvailable(locationId, row, column) {
        const isAvailable = await this.prisma.tree.findFirst({
            where: { locationId, row, column },
        });
        return !isAvailable;
    }
};
exports.TreeService = TreeService;
exports.TreeService = TreeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TreeService);
//# sourceMappingURL=tree.service.js.map